import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import GenerateMessage from "./UnLINE-backend/GenerateMessage";
import { NativeBaseProvider, Box, Button, Center, Avatar } from 'native-base';

export default function TalkScreen({route}) {
    const [messageList, setMessageList] = useState([]);
    const {content} = route.params;

    const generateMessage = new GenerateMessage(JSON.stringify(content))
    const handleMessageButton = (isSender: boolean) => {
        let newMessageList = messageList.slice();
        let newMessage = {
            key: messageList.length,
            content: 'aaa',
            //content: isSender ? generateMessage.getGeneratedMessage("sender") : generateMessage.getGeneratedMessage(generateMessage.opponentName),
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
