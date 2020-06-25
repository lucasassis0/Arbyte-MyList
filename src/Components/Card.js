import React, { useState } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements'

export default function Card (props) {
    const [isChecked, setIsChecked] = useState(false)
    
    return(
        <CheckBox
            title={props.tarefa}
            checked={isChecked}
            onPress={()=> setIsChecked(!isChecked)}
            onIconPress={()=> setIsChecked(!isChecked)}
        />
        // <View style={styles.card}>
        //     <TouchableHighlight style={styles.checkbox} onPress={alteraEstadoCheckbox}>
        //         <View style={styles.checkboxBackground} />
        //     </TouchableHighlight>
        //     <Text style={styles.tarefa} >{props.tarefa}</Text>
        // </View>
    )
}


const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    // checkbox: {
    //     borderWidth: 1,
    //     borderColor: 'gray',
    // },
    // checkboxBackground: {
    //     height: 20,
    //     width: 20,
    //     backgroundColor: 'white'
    // },
    // tarefa: {
    //     paddingLeft: 20,
    //     fontSize: 18,
    //     textAlign: "center",
    //     color: 'black'
    // }
})