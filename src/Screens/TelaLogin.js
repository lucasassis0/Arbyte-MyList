import 'react-native-gesture-handler'
import React, { useState } from "react"
import { View, StyleSheet, SafeAreaView, Image, Alert } from "react-native"
import logo from '../img/logo_size.jpg'
import Input from "../Components/Input"
import Botao from '../Components/Botao'
import { login } from '../api/usuario'

import { AsyncStorage } from "react-native";


export default function TelaLogin({ navigation }) {
    const [email, setEmail] = useState('')

    const fazerLogin = () => {
        login(email)
            .then(resposta => {
                return AsyncStorage.setItem('userData', JSON.stringify(resposta.data))
            })
            .then(() => navigation.push('lista'))
            .catch(erro => {
                console.log("Erro: ", erro)
                Alert.alert('Erro ao efetuar o login.')
            })
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerLogo}>
                <Image style={styles.logo} source={logo} />
            </View>
            <View style={styles.containerInputs}>
                <Input
                    placeholder='   Entre com o seu e-mail'
                    value={email}
                    keyboardType={'email-address'}
                    onChangeText={email => { setEmail(email) }}
                />
            </View>
            <View style={styles.containerBotao}>
                <Botao title={'Entrar'} onPress={() => fazerLogin()} />
                <Botao title={'Cadastrar'} onPress={() => { navigation.navigate('cadastro') }} />
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
    },
    containerInputs: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerBotao: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-evenly',
    }
});