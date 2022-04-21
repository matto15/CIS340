import React from 'react';
import { Text, View, SectionList } from 'react-native';


export default function StatesApp() {
  return (
    <View style={{flex: 1, padding: 22}}>
      <SectionList
        sections={[
          {title: 'A', data:['Alabama', 'Alaska', 'Arkansa']},
          {title: 'C', data:['California', 'Colorado', 'Connecticut']},
          {title: 'M', data:['Missouri', 'Mississippi']},
          {title: 'W', data:['Washington', 'Wyoming']}

        ]}

        renderItem={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44}}> {item} </Text> }
        renderSectionHeader={({section}) => <Text style={{paddingTop: 4, paddingLeft: 10, paddingRight: 10,
        paddingBottom: 4, fontSize: 14, fontWeight: 'bold', backgroundColor: '#2E9D8A'}}>
        {section.title} </Text> }
        keyExtractor={(item,index) => index}
        />
    </View>
  );
}


//TESTING OTHER SOLUTION IN "App copy 3.js", WILL DELETE LINES BELOW LATER

/*
import React from 'react';
import { Text, Image, ScrollView } from 'react-native';


const dog = {
  uri: 'https://images.hindustantimes.com/img/2021/11/03/550x309/Doge_meme_dog_birthday_1635925455510_1635925462309.PNG',
  width: 64,
  height: 64
};

export default MyScrollViewApp = () => (

  <ScrollView style={{padding: 40}}>
    <Text style={{fontSize: 80}}>Try to scroll down</Text>
    <Image source={require('./assets/dog2.png')} style={{width: 64, height: 64}} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Text style={{fontSize: 80}}>Try to scroll down again, if you like</Text>
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Text style={{fontSize: 80}}>Try to scroll</Text>
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Text style={{fontSize: 80}}>Try to scroll</Text>
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Text style={{fontSize: 80}}>React Native Components</Text>
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
  </ScrollView>

);
*/