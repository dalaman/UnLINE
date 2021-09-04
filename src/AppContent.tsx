import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, Box, Button, Center, Input } from 'native-base';
import TalkScreen from './TalkScreen';


function HomeScreen({ navigation }) {
    const [content, setContent] = useState('');

    return (
        <NativeBaseProvider>
            <Box>
                <Button onPress={() => navigation.navigate('Talk', { content: content })}>import talk history and Talk</Button>
                <Input
                    onChangeText={text => setContent(text)}
                    defaultValue={content}
                />
                <Text>{content}</Text>
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