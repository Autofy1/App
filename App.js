/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';


// import SplashScreen from './pagesP/splashScreen';
import LoginPage from './pagesP/loginPage';

const App = () => {
  return (
    <SafeAreaView style= {styles.root}>
      <LoginPage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
