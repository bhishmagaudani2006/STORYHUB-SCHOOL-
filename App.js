import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import HomeScreen from './Screens/HomeScreen'
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import AssetExample from './components/AssetExample';
import LoginScreen from './Screens/LoginScreen'
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen';
import SignUpScreen from './Screens/SignUpScreen';
import ReadScreen from './Screens/ReadScreen';
import WriteScreen from './Screens/WriteScreen';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={{flex:1}}>
     <AppContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  
});

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  LoginScreen:LoginScreen,
  SignUpScreen:SignUpScreen,
  ForgotPasswordScreen:ForgotPasswordScreen,
  ReadScreen:ReadScreen,
  WriteScreen:WriteScreen,

  


});
const AppContainer = createAppContainer(AppNavigator);


