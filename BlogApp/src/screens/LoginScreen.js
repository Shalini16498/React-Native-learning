import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title="Click to me" onPress={()=>navigation.navigate("search")}/>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})