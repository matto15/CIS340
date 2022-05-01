import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [count, setCount] = useState(0);

  const onTap = () => setCount(count => count + 1);

  return (
    <View style={styles.container}>
      <View style={styles.counterText}>
        <Text>Tap Counter: {count}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onTap}>
        <Text>Touch Here</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF8DC',
    paddingHorizontal: 20
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#7FFF00',
    padding: 10
  },

  counterText: {
    alignItems: 'center',
    padding: 10
  }
});
