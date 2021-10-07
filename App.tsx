import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View></View>
      
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Codigo do agente:" placeholderTextColor="#ACACAC"/>
        <TextInput style={styles.input} placeholder="Senha:" placeholderTextColor="#ACACAC" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form:{

  },
  input:{
    backgroundColor: '#414141',
    marginBottom: 20,
    width: 300,
    padding: 12,
    borderRadius: 6
  }
});
