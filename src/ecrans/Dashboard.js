import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Transaction from './Transaction';

const windowHeight = Dimensions.get('window').height;
const Dashboard = ({navigation } ) => {
  return (
    <ScrollView style={styles.root}>
       <View style={styles.header}>

       <View style={styles.headerItems}>
       <TouchableOpacity style={styles.headerItems_item}> 
       <AntDesign
              name="wallet"
              size={20}
              color="#fff"
              style={{marginRight: 5}}
            />
            <Text style={styles.headerItems__text}>Portefeuille</Text>

       </TouchableOpacity>
       <TouchableOpacity style={styles.headerItems_item_inactive}
       onPress={() => navigation.navigate('transactions')}>
       <AntDesign
              name="wallet"
              size={20}
              color="#fff"
              style={{marginRight: 5}}
            />
            <Text style={styles.headerItems__text_inactive}>Transaction</Text>
       </TouchableOpacity>
       </View>
       <View style={styles.accountView}>
        <FontAwesome
        name="dollar"
        size={30}
        color="#fff"
        style={{marginRight: 5}}
        />
                  <Text style={styles.accountText}> 200.000.000</Text>
       </View>
       
       </View>
      
       <View style={styles.topViewContainer}>
       <View style={styles.topCard}>
       <View style={styles.topCardRow}>
        <TouchableOpacity style={styles.topCardRow__item}>
        <AntDesign name="pluscircleo" size={20} color="#0e39c8" />
        <Text style={styles.topCardRow__item_text}>Deposer</Text>
        </TouchableOpacity>
        <TouchableOpacity style ={styles.topCardRow__item}>
        <AntDesign name="minuscircleo" size={20} color="#0e39c8" />
        <Text style={styles.topCardRow__item_text}>Retirer</Text>

        </TouchableOpacity>
        <TouchableOpacity style ={styles.topCardRow__item}>
        <FontAwesome name="exchange" size={20} color="#0e39c8" />
        <Text style={styles.topCardRow__item_text}>Echanger</Text>

        </TouchableOpacity>
         </View> 
       

       </View>
      

      </View>
      <View style={styles.accountTextContainer}>
      <Text style={styles.accountTextContainer_text}> Vos Comptes</Text>


      </View>
      <View>
        <TouchableOpacity style={styles.accountList_item}>
          <View style={styles.accountList_item_image_text} >
<Image
source={require('../../assets/images/bank.jpg')}
 style={{width: 80, height: 80}} >
</Image>
<View>
  <Text style={styles.account_libelle}> Nom du compte</Text>
  <Text>Description du compte </Text>
</View>
          </View>
  <AntDesign name="arrowright" size={20} color="#153ee7" />        

        </TouchableOpacity>
    <TouchableOpacity style={styles.accountList_item} >
      <View style={styles.accountList_item_image_text}>
        <Image
        source={require('../../assets/images/bank.jpg')}
        style={{width: 80, height: 80}}>

        </Image>
      
      <View>
      <Text style={styles.account_libelle}> Nom du compte</Text>
      <Text>Description du compte</Text>
      </View>
      </View>
      <AntDesign name="arrowright" size={20} color="#153ee7" />
     
      </TouchableOpacity> 
      <View style={styles.createAccountContainer}>
        <TouchableOpacity style={styles.createAccountContainer_icon_text}>
          <AntDesign
          name="plus"
          size={20}
          color="#edf1f2"
          style={{marginRight: 5}} />
          <Text>Ajouter un compte </Text>
          
        </TouchableOpacity>

      </View>

      </View>
      <View style={styles.accountTextContainer}> 
      <Text style={styles.accountTextContainer}>  Dernières Transactions </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.lastTransactionItem}>
          <View>
            <Text style={styles.lastTransactionItem_text}> Paiement </Text>
          <Text> 3000 $</Text>
          </View>
          <AntDesign name="arrowright" color="#154ee7" size={20} />

        </TouchableOpacity>
        <TouchableOpacity style={styles.lastTransactionItem}>
          <View>
            <Text style={styles.lastTransactionItem_text}>  Paiement</Text>
            <Text>2700 $</Text>
          </View>
          <AntDesign name="arrowright" color="#154ee7" size={20} />


        </TouchableOpacity>
        <TouchableOpacity style={styles.lastTransactionItem}>
          <View>
          <Text style={styles.lastTransactionItem_text}> Paiement</Text>
            <Text>500 $</Text> 
          </View>
<AntDesign name="arrowright" color="#154ee7" size={20}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lastTransactionItem}>

<View>
<Text style={styles.lastTransactionItem_text}> Paiement</Text>
            <Text>5000 $</Text>

</View>
<AntDesign name="arrowright" color="#154ee7" size={20} />
        </TouchableOpacity>
      </View>
      
      
      </ScrollView>
      )}






export default Dashboard

const styles = StyleSheet.create({
  root:{
    backgroundColor:"edf1f2",
   

  },
  header:{
    backgroundColor: '#154ee7',
    height: windowHeight * 0.3,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 20
  },
  headerItems:{
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  headerItems_item:{
    flexDirection: 'row',
    backgroundColor: '#1d50b1',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 5,
    borderRadius: 15,


  },
  headerItems_item_inactive:{
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 5,
    borderRadius: 15,

  },
  headerItems__text: {
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
  },
  headerItems__text_unactive: {
    color: '#eee',
    fontFamily: 'OpenSans-Regular',
  },
  accountView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  accountText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
  },
  topViewContainer:
  
    {
      left: 0, 
      right: 0, 
      height: 90,
       marginTop: -45},
    topCard: {
      backgroundColor: '#fff',
      paddingVertical: 30,
      paddingHorizontal: 30,
      marginHorizontal: 20,
      borderRadius: 5,
      marginTop: 4,
      flexDirection: 'row',
      alignItems: 'center',
    },
    topCardRow: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    topCardRow__item: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    topCardRow__item_text: {
      fontWeight: 'bold',
      fontFamily: 'OpenSans-Regular',
      color: `#a52a2a`,
    },
    accountTextContainer: {
      padding: 15,
      marginTop: 15,
    },
    accountTextContainer_text: {
      color: '#000',
      fontWeight: 'bold',
      fontFamily: 'OpenSans-Regular',
    },
  
    accountList_item: {
      backgroundColor: '#fff',
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#edf1f2',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  
    accountList_item_image_text: {
      flexDirection: 'row',
      alignItems: 'center',
      fontWeight: 'bold',
    },
    account_libelle: {
      fontWeight: 'bold',
      fontFamily: 'OpenSans-Regular',
      color: '#000',
    },
  
    createAccountContainer: {
      backgroundColor: '#fff',
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#edf1f2',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  
    createAccountContainer_icon_text: {
      borderWidth: 1,
      borderColor: '#edf1f2',
      flexDirection: 'row',
      padding: 12,
      borderRadius: 30,
    },
  
    lastTransactionItem: {
      backgroundColor: '#fff',
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#edf1f2',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  
    lastTransactionItem_text: {
      fontWeight: 'bold',
      fontFamily: 'OpenSans-Regular',
      color: '#000',
    },



 
  });

  