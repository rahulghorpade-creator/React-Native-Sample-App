import { View, Text } from 'react-native';
import React from 'react';

const JSX = () => {
    const getAge = () => {
        return 25;
    } 
    let name = "Rahul";
  return (
    <View>
      <Text style={ {fontSize:40}}>JSX</Text>
      <Text style={ {fontSize:40}}>Name: {name}</Text>
      <Text style={ {fontSize:40}}>Age: {getAge()}</Text>

    </View>
  );
};

export default JSX;