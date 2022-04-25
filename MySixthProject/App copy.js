import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//import { StatusBar } from 'expo-status-bar';

export default function App() {
  
  const csuLogo = {
    uri: "https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Rams-Logo-Demo-Pantone-Reversed-one-color-768x911.png"
  };
  
  return (
    <View style={styles.container}>
      <Image 
        style={styles.localCSULogo}
        source={require('./assets/logo.png')}
      />

      <Image 
        style={styles.urlCSULogo}
        source={{
          uri: "https://cdn.freebiesupply.com/logos/large/2x/csu-rams-1-logo-png-transparent.png"
        }}
      />

      <Image
      style={styles.stretchLogo} 
      source={csuLogo} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  },

  localCSULogo: {
    width: 55,
    height: 65,
  },

  urlCSULogo: {
    width: 50,
    height: 50,
  },

  stretchLogo: {
    height: 200,
    resizeMode: 'center'
  }
});
