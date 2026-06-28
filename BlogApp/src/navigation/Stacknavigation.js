import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import setting from '../screens/setting'

const Stacknavigation = () => {

const  Stack=createNativeStackNavigator()

  return (

   <Stacknavigation>

   <Stack.Screen name='setting'  component={setting}/>
   <Stack.Screen name='loginScreen'  component={LoginScreen}/>



   </Stacknavigation>
   
  )
}

export default Stacknavigation

const styles = StyleSheet.create({})