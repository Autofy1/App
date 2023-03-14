import React from 'react';
import { View, StyleSheet, ImageBackground, Text, Button} from 'react-native';

const VerificationCompelete = () => {
    return (
        <View >
            <Text style={styles.baseTextTop}>
            Verification Successful
            </Text>
          <ImageBackground
          source={require('../References/png_files/pic4.png')}
          style={styles.image}
          > 
          </ImageBackground>
          <View style = {{width:'70%', margin: 60,elevation: 12}}>
          <Button
            title="Proceed to Home"
            color="#0954E8"
          />
          </View>
          
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
      width: 230,
      height: 250,
      marginTop: 110,
      marginLeft: 75
      
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 8,
      elevation: 7,
      backgroundColor: '#0954E8'
    },
    baseText: {
      fontWeight: 'bold',
      color: 'black',
      paddingTop: 20,
      // alignItems: 'center',
      textAlign: 'center',
      fontSize: 20
    },
    buttonText:{
      fontWeight: 'bold',
      color: 'black',
      // alignItems: 'center',
      textAlign: 'center',
      fontSize: 20
    },
    baseTextTop:
    {
        fontWeight: 'bold',
        color: 'black',
        paddingTop: 20,
        // alignItems: 'center',
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 40

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
  
  export default VerificationCompelete;