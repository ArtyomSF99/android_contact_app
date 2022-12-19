import axios from "axios";
import React from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native-web";

const Contact = ({route, navigation}) => {

    const editContact = () => {    
    navigation.navigate('updateContact',
    route.params 
    )
      
    }
    const deleteContact = async () => {    
      route.params.contactDelete(route.params.id)
      navigation.goBack()
    }

    return(
        <View style={styles.main}>
        <View style={styles.contact} key={route.params.id}>
  <View style={[styles.avatar, {backgroundColor: route.params.color}]}>
  <Text style={styles.avatarHeader}>
    {route.params.name[0].toUpperCase()}
  </Text>
  </View>
  <View>
  <Text style={styles.contactName}>
    {route.params.name}
  </Text>
  <Text style={styles.contactNumber}>
    {route.params.phone}
  </Text>
  </View>
 
  </View>
  <View style={styles.contactBtn}>
  <View style={styles.contactEdit}>
  <Button  title="Edit" color={'green'} onPress={editContact}/>
  </View>
  <View style={styles.contactDelete}>
  <Button title="Delete" color={'red'} onPress={deleteContact}/>
  </View>
      
  </View> 
       
    </View>
    )
}


const styles = StyleSheet.create({
    main: {
        marginTop: 20,
    },
    contact:{
        flexDirection:'row',
        height: 80,
        alignItems:'center',
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: 20,
        backgroundColor: '#dae1e3',
        padding: 15,
        borderRadius: 15,
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
      },
      avatar:{
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 50,
      },
      avatarHeader:{
    
        paddingTop: -10,
        fontSize: 50,
        hover: 'none',
        color: '#fff',
      },
      contactName: {
        marginLeft: 30,
        fontSize: 14,
      },
      contactNumber: {
        marginLeft: 30,
        fontSize: 24,
        color: 'gray'
      },
      contactBtn:{
        flexDirection: 'row',
        marginLeft: '5%',
        marginRight: '5%',
      },
      contactEdit: {
        width: '25%',
        marginLeft: '15%',
        borderRadius: 15,
      },
      contactDelete: {
        width: '25%',
        marginLeft: '20%',
        borderRadius: 15,
      }
    
    
    
  });

  export default Contact;