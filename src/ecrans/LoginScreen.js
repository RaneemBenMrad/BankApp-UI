import {  StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoSvg from './../../assets/images/svg/login.svg'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcon from'react-native-vector-icons/MaterialCommunityIcons' 
import { TextInput } from 'react-native-gesture-handler'
import GoogleSvg from './../../assets/images/svg/Google.svg'
import FaceBookSvg from'./../../assets/images/svg/facebook.svg'
import TwitterSvg from './../../assets/images/svg/twitter.svg'

const LoginScreen = ({navigation}) => { 
  return (
    <SafeAreaView style={styles.root}>
        <LogoSvg width={300} height={200}/>
       

      
      <Text style={styles.title}> Connectez-vous à votre compte ! </Text>
      <Text style={styles.sous}> Merci de faire entrer vos coordonées </Text>
      
      
      <View style={styles.inputContainer}>
      <Entypo name='email' size={20} color='#666' style={{marginRight:3}}/>
      <TextInput style={styles.input} 
      placeholder={'Entrer votre email'}/>
      </View>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcon name='security' size={20} color='#666' style={{marginRight:5}}/>
      <TextInput style={styles.input} 
       secureTextEntry/>
       <TouchableOpacity>
        <Text style={{color:'#0000FF'}}> Oublié</Text>
       </TouchableOpacity>
      </View>
      <TouchableOpacity 

      style={styles.touchableButton} onPress={() => navigation.navigate('dashboard')} >
      <Text style={styles.touchableText}> Me Connecter</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.textCenter}>Me connecter avec</Text>
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

        <Text style={{ textAlign:'center'}}> Nouveau? </Text>  
         <TouchableOpacity onPress={() => navigation.navigate('inscription')}> 
            <Text style={{color:'#0065ff',marginLeft:3}}> Crée un compte.</Text> 
            </TouchableOpacity> 
           
          
        
       
    </View>




   


      
    </SafeAreaView>
  )

}
export default LoginScreen



const styles = StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: 'center',
        paddingHorizantal:25,
        backgroundColor:'#fff'

    },
    title: {
        fontSize: 25,
         fontWeight : '500',
         color:'#333',
         marginBottom: 30,

    },
    sous :{
        fontSize: 15,
        fontWeight : '200',
        color:'#333',
        marginBottom: 20,

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


  
   
