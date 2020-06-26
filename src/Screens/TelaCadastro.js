import 'react-native-gesture-handler'
import React, { useState } from "react"
import { View, StyleSheet, SafeAreaView, Image, Alert } from "react-native"
import logo from '../img/logo_size.jpg'
import Botao from '../Components/Botao'
import Input from "../Components/Input"
import { cadastrar } from '../api/usuario'

export default function TelaCadastro({ navigation }) {
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')

    const fazerCadastro = () => {
        cadastrar(nome, email)
            .then(() => {
                Alert.alert('Usuário cadastrado com sucesso!')
                navigation.navigate('login')
            })
            .catch(() => {
                Alert.alert('Erro ao cadastrar.')
            })
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerLogo}>
                <Image style={styles.logo} source={logo} />
            </View>
            <View style={styles.containerInputs}>
                <Input
                    placeholder='   Digite o seu nome'
                    value={nome}
                    onChangeText={nome => { setNome(nome) }}
                />
                <Input
                    placeholder='   Digite o seu email'
                    value={email}
                    keyboardType={'email-address'}
                    onChangeText={email => { setEmail(email) }}
                />
            </View>
            <View style={styles.containerBotao}>
                <Botao title={'Cadastrar'} onPress={() => { fazerCadastro }} />
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
    containerBotao: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 20
    }
});