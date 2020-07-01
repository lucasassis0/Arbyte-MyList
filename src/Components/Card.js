import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

function Card({ texto, id, deletePress, editPress, checkPress, apiCheck}) {
    const [isChecked, setIsChecked] = useState(apiCheck)
    const [editavel, setEditavel] = useState(false)
    const [text, setText] = useState(texto)

    // const editPress = () => {
    //     setEditavel(!editavel)
    // }

    const onCheck = () => {
        setIsChecked(!isChecked)
        if(isChecked){
            return(
                <View style={{
                    height: 19,
                    width: 19,
                    backgroundColor: 'green',
                    borderRadius: 5,
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,
                    elevation: 6,
                }}/>
            )
        }else{
            return <View style={{display: "none"}}/>
        }
    }
    return (
        <View style={styles.card}>
            <TouchableOpacity 
                style={styles.checkBox}
                onPress={()=>{onCheck(); checkPress}}
            />
            <TextInput
                style={styles.textoTarefa}
                value={text}
                editable={editavel}
                id={id}
            >
            </TextInput>
            {
                editavel ?
                    <TouchableOpacity
                        style={styles.iconeClicavel}
                        onPress={() => { editPress(id) }}
                    >
                        <Text>✅</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        style={styles.iconeClicavel}
                        onPress={() => { editPress(id) }}
                    >
                        <Text>✏️</Text>
                    </TouchableOpacity>
            }
            <TouchableOpacity
                style={styles.iconeClicavel}
                onPress={() => { deletePress(id) }}
            >
                <Text>❌</Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStoreToProps = store => {
    return ({
        tasks: store.tasks,
        userData: store.userData
    })
}

export default connect(mapStoreToProps)(Card)

const styles = StyleSheet.create({
    card: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        height: 40,
        marginHorizontal: 40,
        margin: 10
    },
    checkBox: {
        marginRight: 20,
        margin: 5,
        alignSelf: 'flex-start',
        borderWidth: 2,
        borderColor: 'gray',
        backgroundColor: 'white',
        height: 20,
        width: 20,
        borderRadius: 5
    },
    iconeClicavel: {
        justifyContent: "center",
        alignItems: 'center',
        margin: 5
    }
})