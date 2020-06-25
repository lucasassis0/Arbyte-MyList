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
    )
}


const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
})