import React from 'react';
import { Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hello, My name is {props.name}, I'm a student in CIS340</Text>
    </View>
  );
}

export default function MultiComp(){
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    <Text>Welcome to CIS340</Text>
    <Student name = "Matthew Oda"/>
    <Student name = "Sid Redburn"/>
    <Student name = "Clayton Carmine"/>
    <Student name = "Marcus Fenix"/>
    </View>
  );

}

/*

*/