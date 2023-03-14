import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

const Slider1 = () => {
  return (
    <View >
      <ImageBackground
      source={require('../References/png_files/pic2.png')}
      style={styles.image}
      > 
      </ImageBackground>
      <Text style={styles.baseText}>
        Auto Pool with Strangers
      </Text>
      
      <Text style={styles.baseText2}>
        Auto pooling is the way to go! Book low cost sharing rides & travel with people going your way.
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
    height: 200,
    marginTop: 200
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

export default Slider1;