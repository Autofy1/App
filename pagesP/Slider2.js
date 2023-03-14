import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

const Slider2 = () => {
  return (
    <View >
      <ImageBackground 
      source={require('../References/png_files/pic3.png')}
      style={styles.image}
      > 
      </ImageBackground>
      <Text style={styles.baseText}>
        Schedule your Ride
      </Text>
      <Text style={styles.baseText2}>
        Set schedule with location and times, and we have got you covered with the best matches for you to ride with
      </Text>
    </View>
    
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column'
    // justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 280,
    marginTop: 140
  },
  baseText: {
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 20,
    // alignItems: 'center',
    textAlign: 'center',
    fontSize: 20
  },
  baseText2: {
    // fontWeight: 'bold',
    paddingHorizontal: 30,
    color: 'black',
    paddingTop: 20,
    // alignItems: 'center',
    textAlign: 'center',
    color: 'gray',
    fontSize: 18
  }
});

export default Slider2;