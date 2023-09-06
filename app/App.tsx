import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './navigators/AppNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
