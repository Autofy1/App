import React from "react";
import {Pressable,Text,StyleSheet, View,Image} from 'react-native';
import googleicon from 'C:\Users\pranesh\AndroidStudioProjects\AutoFy\pagesP\References\png_giles\googleicon.png' ;

const CustomButton = ({onPress,text,version='Primary'}) => {

    const buttonStyle = 'container' + version;
    if(version == 'Google')
    return (
        <Pressable onPress={onPress} style={styles[buttonStyle]}>
            <View style={styles.SectionStyle}>
                <Image
                    source={googleicon} //Change your icon image here
                    style={styles.ImageStyle}
                />
                <Text style = {styles.textGoogle}>
                    {text}
                </Text>
            </View>
        </Pressable>
    )
    else 
    return (
        <Pressable onPress={onPress} style={styles[buttonStyle]}>
            <Text style={styles.text}>
             {text}
            </Text>
        </Pressable>
    )

};

const styles = StyleSheet.create({
    containerPrimary:
    {
        backgroundColor:'#0954E8',

        alignItems:'center',
        borderRadius:10,

        width:'90%',

        padding:12,
        marginVertical:5
    },
    containerGoogle:
    {
        borderColor: '#565151',
        backgroundColor:'white',
        borderWidth:1,
        alignItems:'center',
        borderRadius:10,

        width:'90%',

        padding:12,
        marginVertical:5
    },
    containerSecondary:{

    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 20,
    },
    ImageStyle: {
        padding: 10,
        margin: 10,
        height: 27,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    text:
    {
        fontWeight:'bold',
        color: 'white',
        fontSize: 15
    },
    textGoogle:
    {
        fontWeight:'bold',
        color: 'black',
        fontSize: 15
    }

})
export default CustomButton;