import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'


const Profile = () => {
   return (
    <View style={styles.container}>

      

      <Text style={styles.name}>
        Shalini Sharma
      </Text>

      <Text style={styles.develop}>
        React Native Developer
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Edit Profile
        </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

 

  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  develop: {
    fontSize: 16,
    marginTop: 10,
    color: 'gray',
  },

  button: {
    backgroundColor: '#09609a',
    width:'99',
    height:'30',
    borderRadius:20,
    marginTop: 10,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign:'center',
    marginTop:'7',
  },

});

export default Profile;