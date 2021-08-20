import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import Header from "./components/Header";
import GenerateMessage from "./UnLINE-backend/generateMessage";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, Box, Button, Center, Avatar } from 'native-base';


function HomeScreen({navigation}) {

    return (
        <NativeBaseProvider>
            <Box>
                <Button onPress={() => navigation.navigate('Talk')}>Talk</Button>
            </Box>
        </NativeBaseProvider>
    )
}

function TalkScreen() {
    const [messageList, setMessageList] = useState([]);

    const handleSend = () => {
        let newMessageList = messageList.slice();
        let newMessage = {key: 'send: message' + messageList.length};
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
    }

    const handleReceive = () => {
        let newMessageList = messageList.slice();
        let newMessage = {key: 'receive: message' + messageList.length};
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
    }

    return (
        <NativeBaseProvider>
            <Box style={{flex:1}}>
                <FlatList
                    data={messageList}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />

                <Center>
                    <Button.Group>
                        <Button onPress={handleReceive}>receive</Button>
                        <Button onPress={handleSend}>send</Button>
                    </Button.Group>
                </Center>
            </Box>
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