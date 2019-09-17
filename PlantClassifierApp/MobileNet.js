import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import * as mobilenet from '@tensorflow-models/mobilenet';

export default function MobileNet(photo) {
  useEffect(() => {
    console.log('in mobile net');
      async function loadTf() {
        console.log("here");
        await tf.ready().then(async () => {
          // Load the model
          let net = await mobilenet.load();
          console.log('Successfully loaded model');
      
          console.log(photo.current);
          if (photo.current) {
              const result = await net.classify(photo.current);
              console.log(result);
          }
        });
      }
  
      loadTf();
  }, []);

  return (
    <View>
      <Text>Test</Text>
    </View>
  );
}