/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Game from './Component/Game';
const App = () => {
  return (
    <SafeAreaView style={styleSheet.SafeAreaView}>
      <View style={styleSheet.container}>
        <Game/>
      </View>
    </SafeAreaView>
  );
};
const styleSheet = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#E8EAD',
  },
});
export default App;
