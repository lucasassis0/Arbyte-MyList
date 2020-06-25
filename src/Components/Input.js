import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input(props) {
    return (
        <TextInput style={styles.input}
            placeholder={props.placeholder}
            placeholderTextColor='gray'
            value={props.value}
            keyboardType={props.keyboardType}
            onChangeText={props.onChangeText}
        />
    )
}
const styles = StyleSheet.create({
    input: {
        width: 250,
        height: 30,
        borderWidth: 1,
        borderColor: "#17E9E0",
        borderRadius: 30,
        margin: 10,
    }
})