import * as mobilenet from '@tensorflow-models/mobilenet';

export default async function loadMobileNet(canvas) {
  console.log('Loading mobilenet..');

  // Load the model.
  let net = await mobilenet.load();
  console.log('Successfully loaded model');

  // Classify image and return predictions
  return await net.classify(canvas);
}