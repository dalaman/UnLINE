import React from 'react';
import { View, Text, Button } from 'react-native';

type Props = {
    name: string;
}

function Header(props: Props) {
    return (
        <View>
            <Text>Welcome {props.name}!!</Text>
        </View>
    )
}

export default Header;