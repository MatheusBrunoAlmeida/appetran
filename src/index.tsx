import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';

import Routes from './routes';

import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export default function App(){
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ backgroundColor: '#312e38', flex: 1 }}>
        <StatusBar barStyle="dark-content" backgroundColor="#312e38" />
        <Routes />
      </View>
    );
  }
}