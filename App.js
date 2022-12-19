import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';
import MainStack from './navigate';




export default function App() {
  const[contacts, setContacts] = useState([])

  const createContact = () =>{
    console.log('kek')
  }
  

  return (
   
 <SafeAreaView style={styles.container}>
    <MainStack/>
      {/* <Header/>
      <View style={{width:'40%', marginLeft:'30%', marginTop:'5%', marginBottom:'5%'}}>
      <Button
      color="green"
      title="Add contact"
      onPress={createContact}
      />
      </View>
      <ContactList/> */}
     
     
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  addButton: {
    color:"#841584",
  },
  
});
