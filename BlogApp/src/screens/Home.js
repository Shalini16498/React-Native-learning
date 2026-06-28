import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Backpack</Text>
      <Text style={styles.text}>Travel with people.Make new friends.</Text>
    
      <View style={styles.container1}>
      <Text style={styles.text2}>Sign Up</Text>
      </View>

      <View style={styles.container2}>
      <Text style={styles.text3}>Log in</Text>
      </View>


    </View>
  )
}

export default Home;

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: '#158a78',
    },
    heading:{
        textAlign:'center',
        color:'yellow',
        fontSize:90,
        fontWeight:'900',
        marginTop:'100',
    },
    text:{
        textAlign:'center',
        color:'white',
        fontSize:20,
        marginTop:'20',

    },
    container1:{
        marginTop:'300',
        width:'320',
        height:'70',
        backgroundColor:'white',
        marginLeft:'40',
        borderRadius:50,
    },
   container2:{
        backgroundColor:'blue',
        marginLeft:'40',
        borderRadius:50,
        marginTop:'50',
        width:'320',
        height:'70',
    },
   text2:{
    color:'blue',
    fontSize:40,
    fontWeight:'900',
    textAlign:"center",
    marginTop:'10',
   },

    text3:{
    color:'white',
    fontSize:40,
    fontWeight:'900',
    textAlign:"center",
    marginTop:'10',
   },


})