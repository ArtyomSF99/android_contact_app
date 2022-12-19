import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';




export default function Header() {

  return (
    <View style={styles.main}>
        <Text style={styles.text}>
            Contacts
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    
    alignItems:'center',

    height: 80,
    backgroundColor: '#dae1e3',
    
  },
  text: {
    marginTop: 40,
    fontSize: 18,
    
  },
  

});