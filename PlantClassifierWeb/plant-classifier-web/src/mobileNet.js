import * as mobilenet from '@tensorflow-models/mobilenet';

export async function loadMobileNet() {
  console.log('Loading mobilenet..');

  // Load the model.
  return await mobilenet.load();
}

export async function classifyImage(model, image) {
  // Classify image and return predictions
  return await model.classify(image);
}