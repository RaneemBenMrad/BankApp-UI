import { StyleSheet, Text, ScrollView, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoSvg from './../../assets/images/svg/login.svg'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcon from'react-native-vector-icons/MaterialCommunityIcons' 
import Iinicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {  TextInput } from 'react-native-gesture-handler'
import GoogleSvg from './../../assets/images/svg/Google.svg'
import FaceBookSvg from'./../../assets/images/svg/facebook.svg'
import TwitterSvg from './../../assets/images/svg/twitter.svg'
import DatePicker from 'react-native-date-picker'

const SignInScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.root}>
       
<ScrollView>
<Text style={styles.title}>S'Incrire</Text>

      
      <View style={styles.inputContainer}>
      <Iinicons name='person-outline' size={20} color='#666' style={{marginRight:0}}/>
      <TextInput style={styles.input} 
      placeholder={'Entrer votre Nom Complet'}/>
      </View>
      <View style={styles.inputContainer}>
      <AntDesign name='phone' size={20} color='#666' style={{marginRight:0}}/>
      <TextInput style={styles.input} 
      placeholder={' Entrer votre Contact'}/>
      </View>

      <View style={styles.inputContainer}>
      <Entypo
       name='calendar' size={20} color='#666' style={{marginRight:5}}/>

    <TouchableOpacity onPress={()=>setOpen(true)}> 
        <Text>Date de naissance</Text>
           </TouchableOpacity> 
      </View>
      
     
        
      <View style={styles.inputContainer}>
      <Entypo name='email' size={20} color='#666' style={{marginRight:0}}/>
      <TextInput style={styles.input} 
      placeholder={'Entrer votre email'}/>
      </View>
      <View style={styles.inputContainer}>
        <Iinicons
         name='ios-lock-closed-outline'
          size={20} 
          color='#666' 
          style={{marginRight:0}}/>
      <TextInput style={styles.input} 
       secureTextEntry placeholder='Mot de passe'/>
       
      </View>

      <View style={styles.inputContainer}>
        <Iinicons
         name='ios-lock-closed-outline'
          size={20} 
          color='#666' 
          style={{marginRight:0}}/>
      <TextInput style={styles.input} 
       secureTextEntry placeholder='Mot de passe '/>
       
      </View>
    
      <TouchableOpacity style={styles.touchableButton} onPress={() => navigation.navigate('dashboard')} >
      <Text style={styles.touchableText}> M'Incrire</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.textCenter}>M'inscrire avec</Text>
    </View>
    <View style={styles.svgRow}>
    
        <TouchableOpacity style={styles.svgButton}>
           <GoogleSvg width={24} height={24}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.svgButton}>
        <FaceBookSvg width={24} height={24}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.svgButton}>
           <TwitterSvg width={24} height={24}/>
        </TouchableOpacity>
    </View>
    <View style={{marginTop:20,flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
        <Text style={{ textAlign:'center'}}>
            Déja un compte? <TouchableOpacity><Text style={{color:'#0065ff',marginLeft:3}} onPress={() => navigation.navigate('connexion')}>Me Connecter</Text></TouchableOpacity>
        </Text>
    </View>
</ScrollView>
      
      




   


      
    </SafeAreaView>
  )
}

export default SignInScreen
const styles = StyleSheet.create({

root:{
  flex: 1,
  justifyContent: 'center',
  paddingHorizantal:25,
  backgroundColor:'#fff'

},
title: {
  fontSize: 28,
   fontWeight : '800',
   color:'#333',
   marginBottom: 13,
   padding: 1

},
inputContainer:{
  flexDirection: 'row',
  alignItems: 'baseline',
  borderBottomColor: '#ccc',
  borderBottomwidth: 1,
  paddingHorizontal:8,
  marginBottom:25,

},
input:{
  flex:1,
},
touchableButton:{
  marginBottom:20,
  borderRadius:5,
  padding:10,
  backgroundColor:'#0065ff'
},
touchableText:{

  textAlign:'center',
  fontWeight:'700',
  fontSize:16,
  color:'#fff',

},
textCenter:{
  textAlign:'center',
  fontWeight:'700',
  fontSize:16,
},
svgRow:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems:'center',
  marginTop: 30, 
},
svgButton:{
  borderColor:'#ddd',
  borderwidth:2,
  borderRadius:10,
  paddingHorizontal: 30,
  paddingVertical: 10,


}


})


 








