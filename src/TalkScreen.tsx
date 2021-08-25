import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import GenerateMessage from "./UnLINE-backend/generateMessage";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, Box, Button, Center, Avatar } from 'native-base';

export default function TalkScreen() {
    const [messageList, setMessageList] = useState([]);

    const handleMessageButton = (isSender: boolean) => {
        let newMessageList = messageList.slice();
        let newMessage = {
            key: messageList.length,
            content: "message here, key: " + messageList.length,
            isSender: isSender
        };
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
    }

    return (
        <NativeBaseProvider>
            <Box style={{flex:1}}>
                <FlatList
                    data={messageList}
                    renderItem={({item}) => <Text>{item.content}</Text>}
                />

                <Center>
                    <Button.Group>
                        <Button onPress={() => handleMessageButton(false)}>receive</Button>
                        <Button onPress={() => handleMessageButton(true)}>send</Button>
                    </Button.Group>
                </Center>
            </Box>
        </NativeBaseProvider>
    );
}
