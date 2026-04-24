import { View, Text ,Button} from 'react-native';
import React, { useState } from 'react';
import Child from './Child';
const Props = () => {
    const [count ,setCount] = useState(0);
    const [number , setNumber] = useState(1);

  return (
    <View>
      <Text style={{ fontSize: 50,  paddingTop: 20 }}>Props Example</Text>
      <Button title='Update Counter' onPress ={ () => setCount( count + 2)}/>
       
      <Button title = 'Multiply Number' onPress = {() => setNumber(number * 5)}/>
        
      <Child data={count} number={number}/>

    </View>
  );
};

export default Props;