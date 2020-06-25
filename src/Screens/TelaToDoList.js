import 'react-native-gesture-handler'

import React, { useState } from "react"
import { View, SafeAreaView, StyleSheet, Image, Text } from "react-native"
import { ScrollView, TouchableHighlight, TextInput, TouchableOpacity } from "react-native-gesture-handler"
import logo from '../img/logo_size.jpg'
import plus from '../img/Plus.png'
import Botao from '../Components/Botao'
import Input from "../Components/Input"
import Card from '../Components/Card'

export default function TelaLogin({ navigation }) {
    const [tarefa, setTarefa] = useState('')
    
    return (
        <ScrollView style={styles.container}>
            <View style={styles.containerLogoApresentacao}>
                <Image style={styles.logo} source={logo} />
                <Text style={styles.apresentacao}>
                    Olá Lucas, {'\n'} essa é a sua lista de tarefas.
                </Text>
            </View>
            <View style={styles.containerInputAdicionaTarefa}>
                <Input
                    placeholder={'   Insira uma tarefa'}
                    value={tarefa}
                    onChangeText={tarefa => setTarefa(tarefa)}
                />
                <TouchableOpacity
                    style={styles.clickAdicionar}
                    onPress={() => console.log('adicionar tarefa')}
                >
                    <Image style={styles.imgAdicionar} source={plus} />
                </TouchableOpacity>
            </View>
            <View style={styles.containerTarefas}>
                <ScrollView style={styles.scrollAtividades}>
                    <Card tarefa={tarefa} />
                </ScrollView>
            </View>
            <View style={styles.containerBotao}>
                <Botao title={'Sair'} onPress={() => navigation.navigate('login')} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    containerLogoApresentacao: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
    },
    apresentacao: {
        textAlign: "center"
    },
    containerInputAdicionaTarefa: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center"
    },
    clickAdicionar: {
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 6,
    },
    imgAdicionar: {
        width: 25,
        height: 25
    },
    containerTarefas: {
        flex: 3,
        marginLeft: 35,
        marginRight: 60
    },
    scrollAtividades: {
        height: 250,
    },
    containerBotao: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        marginBottom: 20
    }
})