import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet,SafeAreaView , Text} from 'react-native';
import  LoginScreen from './src/ecrans/LoginScreen'
import SignInScreen from './src/ecrans/SignInScreen';
import Navigation from './src/routes/Navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './src/ecrans/Dashboard';
import Transaction from './src/ecrans/Transaction';



const App = () => {
  return (

   <NavigationContainer>
<SafeAreaView style = {styles.root}>
<Navigation/>
   </SafeAreaView>
   </NavigationContainer>

  
   
    
    
  );
};

export default App

const styles = StyleSheet.create({
    root : {
        flex: 1 , 
    },

})