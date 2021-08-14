import React from 'react';
import { View, Text, Button } from 'react-native';
import Header from "./components/Header";
import GenerateMessage from "./backend/generateMessage";


function App() {
    const [name, setName] = React.useState("John Smith");

    const generateMessage = new GenerateMessage();
    const message = generateMessage.getGeneratedMessage(name);

    return (
        <View>
            <Header name={name}/>
            <Text>Hello, World!</Text>
            <Text>message: {message}</Text>
        </View>
    )
}

export default App;