import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Dashboard from '../ecrans/Dashboard';
import Transaction from '../ecrans/Transaction';
import LoginScreen from '../ecrans/LoginScreen';
import SignInScreen from '../ecrans/SignInScreen';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    
<Stack.Navigator initialRouteName="connexion">
        <Stack.Screen name="connexion" component={LoginScreen} options={{
          headerShown: false  }} />
        <Stack.Screen name="inscription" component={SignInScreen} options={{
          headerShown: false  }} />
        <Stack.Screen name="dashboard" component={Dashboard} options={{
          headerShown: false  }} />
        <Stack.Screen name="transactions" component={Transaction} options={{
          headerShown: false  }}  />



          </Stack.Navigator> 




  


      
     
  );
};

export default Navigation;

