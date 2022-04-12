import React from 'react';
import { Text, Image, View } from 'react-native';

export default function MyDog() {
  let pic = {uri: "https://images.hindustantimes.com/img/2021/11/03/550x309/Doge_meme_dog_birthday_1635925455510_1635925462309.PNG"}
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image source = {pic}
      style={{width: 200, height: 200}}
      />
      <Text>Hello, this is my dog (not really but it is cool)</Text>
    </View>
  );
}


