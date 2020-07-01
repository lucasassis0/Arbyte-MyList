import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/reducers/reducer'

import TelaLogin from './src/Screens/TelaLogin.js'
import TelaCadastro from './src/Screens/TelaCadastro.js'
import TelaToDoList from './src/Screens/TelaToDoList.js'

const Stack = createStackNavigator()
const store = createStore(reducer)

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"lista"} screenOptions={{ headerShown: false }}>
          <Stack.Screen name="login" component={TelaLogin} />
          <Stack.Screen name="cadastro" component={TelaCadastro} />
          <Stack.Screen name="lista" component={TelaToDoList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
