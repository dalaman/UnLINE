import React from 'react';
import { View, Text, Button } from 'react-native';
import Header from "./components/Header";
import GenerateMessage from "./UnLINE-backend/generateMessage";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, Box } from 'native-base';


function HomeScreen({navigation}) {
    const [name, setName] = React.useState("John Smith");

    const generateMessage = new GenerateMessage();
    const message = generateMessage.getGeneratedMessage(name);

    return (
        <View>
            <Header name={name}/>
            <Text>Hello, World!</Text>
            <Text>message: {message}</Text>
            <Button title='talk with aaaa' onPress={() => navigation.navigate('Talk')} />
        </View>
    )
}

function TalkScreen() {
    return (
        <NativeBaseProvider>
            <Box>Hello, world</Box>
        </NativeBaseProvider>
    );
}

const Stack = createNativeStackNavigator();

function AppContent() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Talk" component={TalkScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppContent;