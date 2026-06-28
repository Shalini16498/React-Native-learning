import { StyleSheet, Text, View,Image,TextInput} from 'react-native'
import React from 'react'


const Insta = () => {
  return (
    <View style={styles.container}>
     
     <Text style={styles.text}>Login</Text>
     <TextInput placeholder="Enter your name"style={styles.input}/>
     <TextInput placeholder="Enter your password"style={styles.input}/>
     <TextInput placeholder="Forgot password?"style={styles.input}/>
     <TextInput placeholder="Create new account"style={styles.input}/>
     <TextInput placeholder="Log out"style={styles.input}/>
     







    </View>
  )
}

export default Insta

const styles = StyleSheet.create({
  
    container:{
        flex:1,
        alignItems:'center',
        //justifyContent:'center',
    },
    
   text:{
    
    fontSize:80,
    fontWeight:'500',
    color:'navy',
    marginTop:70,
   },

   input:{
    //textAlign:'center',
    marginTop:'50',
    fontSize:20,
    width:290,
    borderColor:'navy',
    borderWidth:1,
   }
})