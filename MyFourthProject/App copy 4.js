import React from 'react';
import { Text, View, FlatList } from 'react-native';


export default function StatesApp() {
  return (
    <View style={{flex: 1, padding: 22}}>
      <FlatList
        data={[
          {key: 'Alabama'},
          {key: 'Alaska'},
          {key: 'Arizona'},
          {key: 'California'},
          {key: 'Colorado'},
          {key: 'Conneticut'},
          {key: 'Florida'},
          {key: 'Missouri'},
          {key: 'New York'},
          {key: 'New Mexico'}
        ]}
        renderItem={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44}}> {item.key} </Text> }
        />
    </View>
  );
}



/*

*/