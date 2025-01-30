import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { ActivityIndicatorWithRef } from './ActivityIndicatorWithRef';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ActivityIndicatorWithRef />
      <ActivityIndicatorWithRef size="large" />
      <ActivityIndicatorWithRef size="small" color="#0000ff" />
      <ActivityIndicatorWithRef size="large" color="#00ff00" />
    </SafeAreaView>
  );
}

export default App;
