import * as mobilenet from '@tensorflow-models/mobilenet';

export default async function loadMobileNet(canvas) {
  let net;
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Successfully loaded model');

  return await net.classify(canvas);
}