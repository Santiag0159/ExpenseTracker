import React from 'react';
import HomeScreen from './src/screens/HomeScreen'; 
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8e5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
