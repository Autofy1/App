import React ,{useState} from 'react';
import { View, StyleSheet, ImageBackground, Text, Image } from 'react-native';
import Logo from '../References/png_files/logoPlainbg.png'
import CustomButton from './src/components/customButton';
import CustomInput from './src/components/customInput'

const LoginPage = () =>{
 
    const [EmailId, setEmailId] = useState('');
    const [Password, setPassword] = useState('');
    const onSignInPressed = () =>
    {
        console.warn("Login Successful");
    }


return(

        <View style={styles.root}> 
            <Image
                source={Logo}
                style ={styles.logo}
                resizeMode = 'contain'
            />
       
            <CustomInput
            placeholder='Email ID '
            value={EmailId}
            setValue={setEmailId}/>

            <CustomInput
            placeholder='Password'
            value={Password}
            setValue={setPassword}
            security= {true }/>
        
            <CustomButton text='Login' onPress={onSignInPressed} />
            <CustomButton text='Sign in with Google' onPress={onSignInPressed} version='Google'/>
        </View>
  )
};

const styles = StyleSheet.create({
root:{
    alignItems:'center',
    padding:10,
},
logo:{
    width:'80%',
    marginHorizontal:30,
    height: 60,
    marginTop: 20
}
});

export default LoginPage;