import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';


 const SplashScreen = () => {
  return (
    <ImageBackground
      style={s.background}
      source={require('../References/png_files/pic1.png')}
    >
    </ImageBackground>
  );
};

const s = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  }
});

export default SplashScreen;