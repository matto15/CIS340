import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
//import { StatusBar } from 'expo-status-bar';

export default function App() {

  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Ram-Logo-Pantone-375-768x768.jpg'}}
             style={styles.logo} />
      
      <Text style={styles.instructions}> 
        Press the button below to select an image on your phone!
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => alert('You have not selected an image yet')}>
        <Text styles={styles.buttonText}>Pick Image</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },

  button: {
    //alignItems: 'center',
    backgroundColor: '#7FFF00',
    padding: 20,
    borderRadius: 5
  },

  instructions: {
    fontSize: 18,
    color: '#FF4500',
    marginHorizontal: 15,
    marginBottom: 10
  },

  logo: {
    width: 310,
    height: 300,
    marginBottom: 20
  },

  buttonText: {
    fontSize: 20,
    color: '#FF4500'
  }
});
