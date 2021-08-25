import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import Header from "./components/Header";
import GenerateMessage from "./UnLINE-backend/generateMessage";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, Box, Button, Center, Avatar } from 'native-base';
import TalkScreen from './TalkScreen';


function HomeScreen({navigation}) {

    return (
        <NativeBaseProvider>
            <Box>
                <Button onPress={() => navigation.navigate('Talk')}>Talk</Button>
            </Box>
        </NativeBaseProvider>
    )
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