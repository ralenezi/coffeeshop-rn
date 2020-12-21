import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RootNavigator from './components/Navigation'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const theme = {
  light: {
    mainColor: '#242424',
    backgroundColor: '#fefafb',
    pink: '#ff85a2',
    red: '#ff3232',
  },
  dark: {
    mainColor: '#fefafb',
    backgroundColor: '#242424',
    pink: '#ff85a2',
    red: '#ff3232',
  },
}
const { Navigator, Screen } = createStackNavigator()
export default function App() {
  return (
    // <View style={styles.container}>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>

    // {/* <BakeryList /> */}
    // {/* <BakeryDetail /> */}
    // <StatusBar style='auto' />
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
