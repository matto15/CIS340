import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';

function TV(props) {
  const [isOff, setIsOff] = useState(true);

  return (
    <View>
      {"\n\n\n\n"}
      <Text>
        This is {props.name} TV, and it is {isOff ? "OFF" : "Turned on"}
      </Text>
      <Button
        onPress={() => {
          setIsOff(false);
        }}
        disabled={!isOff}
        title={isOff ? "Turn On Please" : "Thanks"}
      />
    </View>
  );
}

export default function MultiTVs(){
  return (
    <View>
      <TV name = "LG"/>
      <TV name = "Sony"/>
    </View>
  );

}

