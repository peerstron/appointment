import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Main from './screens/main/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <Main />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#fcf9f9'
  },
});
