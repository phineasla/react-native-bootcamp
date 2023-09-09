import React from 'react';
import {HomeScreen} from './screens/HomeScreen/HomeScreen';
import {Appearance, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

function App(): JSX.Element {
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
