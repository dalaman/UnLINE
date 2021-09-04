import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import GenerateMessage from "./UnLINE-backend/GenerateMessage";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, Box, Button, Center, Avatar } from 'native-base';
import RNFS from 'react-native-fs';

export default function TalkScreen({route}) {
    const [messageList, setMessageList] = useState([]);
    const {name, uri, content} = route.params;

    const fileuri = JSON.stringify(uri);

    const generateMessage = new GenerateMessage(JSON.stringify(content))
    
    //getRealPath(JSON.stringify(uri)).then((result) => {console.log(result)});
    //const generateMessage = new GenerateMessage(content);
    //console.log("message: ", generateMessage.getGeneratedMessage("生方"));

    const handleMessageButton = (isSender: boolean) => {
        let newMessageList = messageList.slice();
        let newMessage = {
            key: messageList.length,
            content: isSender ? generateMessage.getGeneratedMessage("sender") : generateMessage.getGeneratedMessage(generateMessage.opponentName),
            isSender: isSender
        };
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
    }

    return (
        <NativeBaseProvider>
            <Box style={{flex:1}}>
                <Box>{JSON.stringify(uri)}</Box>
                <Box>{JSON.stringify(name)}</Box>
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
