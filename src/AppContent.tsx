import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import Header from "./components/Header";
import GenerateMessage from "./UnLINE-backend/generateMessage";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, Box, Button, Center, Avatar } from 'native-base';
import TalkScreen from './TalkScreen';
import DocumentPicker from 'react-native-document-picker';


function HomeScreen({navigation}) {
    let fileInfo;

    return (
        <NativeBaseProvider>
            <Box>
                <Button onPress={() => navigation.navigate('Talk', {name: fileInfo.name, uri: fileInfo.uri})}>import talk history and Talk</Button>
                <Button onPress={() => {
                    pickOneFile().then((res) => {
                        fileInfo = res;
                    });
                }}>pick file</Button>
            </Box>
        </NativeBaseProvider>
    )
}

const pickOneFile = async () => {
    try{
        const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
        });
        console.log(res[0].name);
        console.log(res[0].uri);
        return res[0];
    } catch (err) {
        if(DocumentPicker.isCancel(err)){
            console.log("canceled");
            return 'picking canceled';
        } else {
            throw err;
        }
    }
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