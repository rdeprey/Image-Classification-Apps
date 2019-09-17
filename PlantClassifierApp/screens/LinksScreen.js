import React, { useRef, useEffect } from 'react';
import { Dimensions, ScrollView, StyleSheet, Image } from 'react-native';
import MobileNet from '../MobileNet';

export default function LinksScreen(props) {
  const imageRef = useRef();

  useEffect(() => {
    updateUi();
  }, []);

  const updateUi = () => {
    return (
      <ScrollView style={styles.container}>
          <Image
            ref={imageRef}
            style={styles.image}
            source={{uri: props.navigation.state.params.src}}
          />
          <MobileNet imgElem={imageRef} />
      </ScrollView>
    );
  };

  return (
    <ScrollView style={styles.container}>
        <Image
          ref={imageRef}
          style={styles.image}
          source={{uri: props.navigation.state.params.src}}
        />
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Prediction',
};

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    width: win.width - 20,
    height: win.height / 2,
  }
});
