import { View, Text } from 'react-native'
import React from 'react'

const Child = (props) => {
    const counter = props.data;
    const numberVal = props.number;
  return (
    <View>
      <Text>Child</Text>
      <Text>Counter Value: {counter}</Text>
      <Text>Number Value: {numberVal}</Text>
    </View>
  )
}

export default Child