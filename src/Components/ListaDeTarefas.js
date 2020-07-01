import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Card from '../Components/Card'

export default function ListaDeTarefas({tasks, editPress, deletePress, checkPress}) {
    
    return (
        <ScrollView style={styles.scrollAtividades}>
            {
                tasks.map(task => {
                    return (
                        <Card
                            texto={task.description}
                            id={task.id}
                            editPress={editPress}
                            deletePress={deletePress}
                            checkPress={checkPress}
                            apiCheck={task.completed}
                        />
                )})
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollAtividades: {
        height: 250,
    },
})