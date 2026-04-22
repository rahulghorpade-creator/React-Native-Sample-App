import React from 'react';
import {View , Text, Button} from 'react-native';
import First from './src/components/First';
import JSX from './src/components/JSX';
const App = () => {
  return (
    <View>
      <Text style={ {fontSize:30} }>App Build by Rahul</Text>
      <Text style={ {fontSize:30} }>This is my first app</Text>
      <Button title="Submit Button"/>
      <First/>
      <JSX/>

    </View>
  );
};

export default App;