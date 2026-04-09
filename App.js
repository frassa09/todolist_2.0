import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Home from './tabs/Home';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator()

export default function App() {


  useEffect( () => {


  }, [])

  const [fontsLoaded] = useFonts({
    'Main-Font': require('./fonts/Lokeya.ttf'),
  })

  if(!fontsLoaded){
    return null
  }

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


