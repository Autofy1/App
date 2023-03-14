import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const CustomInput = ({value,setValue,placeholder,security}) => {
return (
    <View style={styles.container}>
        <TextInput 
        value = {value}
        onChangeText= {setValue}
        placeholder ={placeholder} 
        style={styles.input}
        secureTextEntry={security}/>
    </View>
    
    )
};

const styles = StyleSheet.create({
    container: {

        borderRadius:15,
        borderColor:'#C6B1B1',
        borderWidth:1,

        marginVertical: 10,

        width:'90%',
        height: 42

    },
    input: {}
})

export default CustomInput;