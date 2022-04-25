import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
//import { StatusBar } from 'expo-status-bar';

export default function App() {
  
  const csuLogo = {
    uri: "https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Rams-Logo-Demo-Pantone-Reversed-one-color-768x911.png"
  };
  
  return (
    <View style={styles.container}>
      <ImageBackground source={csuLogo} style={styles.image}>
      
        <Text style={styles.text}>CSU Logo</Text>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

  text: {
    color: "red",
    fontSize: 40,
    fontWeight: "bold"
  }
});
