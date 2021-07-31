import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppLoadingScreen from './AppLoadingScreen';
import EmployeeDetailsScreen from './EmployeeDetailsScreen';

import HomeScreen from './HomeScreen';


const Stack = createStackNavigator();
export default function RootWindow() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "AppLoadingScreen" headerMode="none">
       <Stack.Screen name="AppLoadingScreen" component={AppLoadingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="EmployeeDetailsScreen" component={EmployeeDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
