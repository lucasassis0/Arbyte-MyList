import 'react-native-gesture-handler'

import React, { useState, useEffect } from "react"
import { View, StyleSheet, Image, Text } from "react-native"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import logo from '../img/logo_size.jpg'
import plus from '../img/Plus.png'
import Botao from '../Components/Botao'
import Input from "../Components/Input"
import Card from '../Components/Card'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import salvarDados from '../actions/salvarDados'
import salvarTarefas from '../actions/salvarTarefas'
import Axios from 'axios'
import { registraTarefa } from '../api/usuario'
import ListaDeTarefas from '../Components/ListaDeTarefas'

function TelaToDoList({ navigation, dispatch, userData, tasks }) {
    const [tarefa, setTarefa] = useState('')

    useEffect(() => {
        AsyncStorage.getItem('userData')
            .then((userData) => {
                if (userData === null) {
                    navigation.navigate('login')
                } else {
                    const uData = JSON.parse(userData)
                    dispatch(salvarDados(uData))
                    return uData;
                }
            })
            .then(data => {
                if (!data) {
                    return
                }
                return Axios.get('https://arbyte-todo-list-api.herokuapp.com/tasks', {
                    headers: { 'Authorization': `Bearer ${data.token}` }
                })
            })
            .then(response => response.data)
            .then(tasks => {
                dispatch(salvarTarefas(tasks))
            })
            .catch(() => { })
    }, [])

    const adicionaTarefaNaApi = () => {
        registraTarefa(tarefa, userData.token)
            .then(() => {
                dispatch(salvarTarefas(tarefa))
                console.log('tarefa adicionada');
            })
            .catch((erro) => {
                console.log('erro: ', erro);
            })
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.containerLogoApresentacao}>
                <Image style={styles.logo} source={logo} />
                <Text style={styles.apresentacao}>
                    Olá {userData.user.fullName + ',\n'}essa é a sua lista de tarefas.
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
                    onPress={() => adicionaTarefaNaApi()}
                >
                    <Image style={styles.imgAdicionar} source={plus} />
                </TouchableOpacity>
            </View>
            <View style={styles.containerTarefas}>
                <ListaDeTarefas tasks={tasks} editPress={()=>{}} deletePress={()=>{}} checkPress={()=>{}} />
            </View>
            <View style={styles.containerBotao}>
                <Botao title={'Sair'} onPress={() => navigation.navigate('login')} />
            </View>
        </ScrollView>
    )
}

const mapStoreToProps = store => {
    return ({
        userData: store.userData,
        tasks: store.tasks
    })
}

export default connect(mapStoreToProps)(TelaToDoList)

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
    containerBotao: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        marginBottom: 20
    }
})