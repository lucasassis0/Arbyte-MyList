import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import TelaLogin from './src/Screens/TelaLogin.js'
import TelaCadastro from './src/Screens/TelaCadastro.js'
import TelaToDoList from './src/Screens/TelaToDoList.js'

const Stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"lista"} screenOptions={{ headerShown: false}}>
        <Stack.Screen name="login" component={TelaLogin}/>
        <Stack.Screen name="cadastro" component={TelaCadastro}/>
        <Stack.Screen name="lista" component={TelaToDoList}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
