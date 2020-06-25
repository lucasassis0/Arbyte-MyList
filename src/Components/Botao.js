import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Botao(props) {
    return (
        <TouchableOpacity style={styles.botao} onPress={props.onPress} >
            <Text style={styles.textoDoBotao}>{props.title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    botao: {
        width: 180,
        height: 45,
        borderRadius: 30,
        backgroundColor: '#17E9E0',
        borderWidth: 1,
        borderColor: "#A1FFF6",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    textoDoBotao: {
        textAlign: 'center',
        paddingTop: 10,
        color: 'white',
        fontWeight: "bold",
    }
})