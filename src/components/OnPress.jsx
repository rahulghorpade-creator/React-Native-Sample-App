
import { View, Text ,Button} from 'react-native';
import React from 'react';

const OnPress = () => {
    let name = 'Rahul';
    const getName = (tname) => {
        name = tname;
        console.log('Button Pressed show name:',tname);
        console.warn('Button Pressed');
    };

    return (
    <View>
      <Text style={{ fontSize: 40 }}>My name is : {name}</Text>
      <Button title="Press Me" onPress={()=> getName('Trupti')}/>

    </View>
  )
};

export default OnPress;