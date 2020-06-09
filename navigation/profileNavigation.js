import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import ProfileScreen from '../screens/ProfileScreen';
import FavsScreen from '../screens/FavsScreen';
import FotografosScreen from '../screens/FotografosScreen';
  
  const Stack = createStackNavigator();
  
  export default function ProfileNavigator() {
    return (
     
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Profile Screen">
          <Stack.Screen name="Profile Screen" component={ProfileScreen} />
          <Stack.Screen name="FavsScreen" component={FavsScreen} />
          <Stack.Screen name="FotografosScreen" component={FotografosScreen} />
        </Stack.Navigator>
);
  }