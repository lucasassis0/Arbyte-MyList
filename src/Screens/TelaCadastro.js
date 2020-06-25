import 'react-native-gesture-handler'
import React, { useState } from "react"
import { View, StyleSheet, SafeAreaView, Image } from "react-native"
import logo from '../img/logo_size.jpg'
import { TextInput } from "react-native-gesture-handler"
import Botao from '../Components/Botao'

export default function TelaCadastro({ navigation }) {
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerLogo}>
                <Image style={styles.logo} source={logo} />
            </View>
            <View style={styles.containerInputs}>
                <TextInput style={styles.inputNome}
                    placeholder='   Digite o seu nome'
                    placeholderTextColor='gray'
                    value={nome}
                    onChangeText={ nome => { setNome(nome) }}
                />
                <TextInput style={styles.inputEmail}
                    placeholder='   Digite o seu email'
                    placeholderTextColor='gray'
                    value={email}
                    keyboardType={'email-address'}
                    onChangeText={ email => { setEmail(email) }}
                />
            </View>
            <View style={styles.containerBotao}>
                <Botao title={'Cadastrar'} onPress={() => {navigation.navigate('lista')}} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    containerLogo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
    },
    containerInputs: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputEmail: {
        width: 250,
        height: 30,
        borderWidth: 1,
        borderColor: "#17E9E0",
        borderRadius: 30,
        margin: 10,
    },
    inputNome: {
        width: 250,
        height: 30,
        borderWidth: 1,
        borderColor: "#17E9E0",
        borderRadius: 30,
        margin: 10,
    },
    containerBotao: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 20
    }
});