import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  <Stack.Navigator>
    <Stack.Screen name="Home" />
  </Stack.Navigator>;
};
