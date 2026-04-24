import { View, Text ,Button } from 'react-native';
import React ,{useState} from 'react';

const UseStateHook = () => {
    const [name, setName] = React.useState('Rahul');
    const updateName = (name) => {
        setName(name);
        console.log("name updated to:",name);
    }
    return (
        <View>
            <Text style ={{fontSize:30}}>UseStateHook-{name}</Text>
            <Button title="Change name" onPress={() => updateName('Trupti 1')}/>
        </View>
    );
};

export default UseStateHook;