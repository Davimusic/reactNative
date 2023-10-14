import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, ImageBackground, Platform, TouchableOpacity } from 'react-native';
import Menu from './src/components/menu';
import AudioPlayer from './src/components/audio';
import Player from './src/components/player';
import React, { useState, useEffect, useContext } from 'react';
import store from './src/funciones/redux/store';
import { Provider } from 'react-redux';
import BackgroundImage from './src/components/backgroundImage'
import styles from './src/funciones/styles.js/globalStyles';
import { initializeAsync } from 'expo-av';





import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


import Login from './src/screens/login';
import ContactUS from './src/screens/contactUs'
import MusicPlayer from './src/screens/musicPlayer';
import Photos from './src/screens/photos';


export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
          <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ContactUs" component={ContactUS} />
            <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
            <Stack.Screen name="Photos" component={Photos} />
          </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}






