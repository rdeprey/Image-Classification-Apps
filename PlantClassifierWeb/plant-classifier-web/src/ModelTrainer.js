import * as tf from '@tensorflow/tfjs';
import image1 from './simple/custom-1.jpg';
import image2 from './simple/custom-2.jpg';

const images = [
    image1,
    image2,
];

const labels = [
    'x',
    'o',
];

tf.setBackend('webgl');

const loadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = typeof src === 'string' ? src : src.toDataURL("image/png");
        img.width = 256;
        img.height = 256;

        // Returns a 3d Tensor with shape [width, height, color_channels]
        img.onload = () => resolve(tf.browser.fromPixels(img));
        img.onerror = (err) => reject(err);
    });
};

// Standard CNN architectures expect images to be of a fixed size
// Generally best to use square images
// MobileNet expects 224x224 square images
// This function chops off the edges of the longer side
const cropImage = (img) => {
    const width = img.shape[0];
    const height = img.shape[1];

    // use the shorter side as the side to which to crop
    const shorterSide = Math.min(img.shape[0], img.shape[1]);
    
    // calculate beginning and ending crop points
    const startingHeight = (height - shorterSide) / 2;
    const startingWidth = (width - shorterSide) / 2;
    const endingHeight = startingHeight + shorterSide;
    const endingWidth = startingWidth + shorterSide;
  
    // return image data cropped to those points
    return img.slice([startingWidth, startingHeight, 0], [endingWidth, endingHeight, 3]);
};

// Resize the now-square images to 224x224
const resizeImage = (img) => {
    return tf.image.resizeBilinear(img, [224, 224]);
};

// Translate the Tensor
// Model expects input in shape of [numTrainingExamples (any), 224, 224, 3]
// Pixel data should be a floating point number between -1 and 1 (done through normalization)
const batchImage = (img) => {
    // Expand our tensor to have an additional dimension, whose size is 1
    const batchedImage = img.expandDims(0);

    // Turn pixel data into a float between -1 and 1.
    return batchedImage.toFloat().div(tf.scalar(127)).sub(tf.scalar(1));
}

const loadAndProcessImage = (img) => {
    const croppedImage = cropImage(img);
    const resizedImage = resizeImage(croppedImage);
    const batchedImage = batchImage(resizedImage);
    return batchedImage;
}

const loadMobileNet = () => {
    return tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json');
};

// Get a pretrained model that includes everything up to the conv_pw_13_relu activation layer
// because this is the last activation layer before softmax, which is activation layer used to
// narrow the predictions to one of a thousand categories.
function buildPretrainedModel() {
    return loadMobileNet().then(mobilenet => {
        const layer = mobilenet.getLayer('conv_pw_13_relu');
        return tf.model({
            inputs: mobilenet.inputs,
            outputs: layer.output,
        });
    }).catch(err => {
        console.log('pretrained model error: ', err);
    });
}

// Loops through an array of images
function loadImages(images, pretrainedModel) {
    let promise = Promise.resolve();
    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        promise = promise.then(data => {
            return loadImage(image).then(loadedImage => {
                // Note the use of `tf.tidy` and `.dispose()`. These are two memory management
                // functions that Tensorflow.js exposes.
                // https://js.tensorflow.org/tutorials/core-concepts.html
                //
                // Handling memory management is crucial for building a performant machine learning
                // model in a browser.
                return tf.tidy(() => {
                    const processedImage = loadAndProcessImage(loadedImage);
                    const prediction = pretrainedModel.predict(processedImage);

                    if (data) {
                        const newData = data.concat(prediction);
                        data.dispose();
                        return newData;
                    }

                    return tf.keep(prediction);
                });
            });
        }).catch(err => {
            console.log('promise error: ', err);
        });
    }

    return promise;
};

const oneHot = (labelIndex, classLength) => {
    return tf.tidy(() => tf.oneHot(tf.tensor1d([labelIndex]).toInt(), classLength));
};

const getLabelsAsObject = (labels) => {
    let labelObject = {};
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      if (labelObject[label] === undefined) {
        // only assign it if we haven't seen it before
        labelObject[label] = Object.keys(labelObject).length;
      }
    }
    return labelObject;
};

const addLabels = (labels) => {
    return tf.tidy(() => {
        const classes = getLabelsAsObject(labels);
        const classLength = Object.keys(classes).length;

        let ys;
        for (let i = 0; i < labels.length; i++) {
            const label = labels[i];
            const labelIndex = classes[label];
            const y = oneHot(labelIndex, classLength);
            if (i === 0) {
                ys = y;
            } else {
                ys = ys.concat(y, 0);
            }
        }
        return ys;
    });
};

const getModel = (numberOfClasses) => {
    const model = tf.sequential({
      layers: [
        tf.layers.flatten({inputShape: [7, 7, 256]}),
        tf.layers.dense({
          units: 100,
          activation: 'relu',
          kernelInitializer: 'varianceScaling',
          useBias: true
        }),
        tf.layers.dense({
          units: numberOfClasses,
          kernelInitializer: 'varianceScaling',
          useBias: false,
          activation: 'softmax'
        })
      ],
    });
  
    model.compile({
      optimizer: tf.train.adam(0.0001),
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy'],
    });
  
    return model;
}

const makePrediction = (pretrainedModel, model, image) => {
    return loadImage(image).then(loadedImage => {
      return loadAndProcessImage(loadedImage);
    }).then(loadedImage => {
      const activatedImage = pretrainedModel.predict(loadedImage);
      loadedImage.dispose();
      return activatedImage;
    }).then(async activatedImage => {
      const prediction = model.predict(activatedImage);
      const mostLikelyValue = prediction.as1D().argMax();
      const predictionLabel = (await mostLikelyValue.data())[0];
      return {
          prediction: prediction,
          predictionLabel: labels[predictionLabel],
      };
    }).catch(err => {
        console.log('err: ', err);
    });
  }

export const newModel = async () => {
    return buildPretrainedModel().then(pretrainedModel => {
        return loadImages(images, pretrainedModel).then(xs => {
            const ys = addLabels(labels);
            const model = getModel(2);

            model.fit(xs, ys, {
                epochs: 20,
                shuffle: true,
            });

            return {
                pretrainedModel: pretrainedModel,
                model: model,
            };
        });
    });
};

export const predictWithNewModel = async (newModel, image) => {
    return await makePrediction(newModel.pretrainedModel, newModel.model, image);
}