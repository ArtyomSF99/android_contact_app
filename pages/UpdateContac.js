import axios from "axios";
import { Formik } from "formik";
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { StyleSheet } from "react-native-web";

const UpdateContact = ({route, navigation}) => {
    const[oldName, setOldName] = useState(route.params.name)
    const[oldPhone, setOldPhone] = useState(route.params.phone)

    
    return(
        <View style={styles.main}>
           <Formik initialValues={{name:route.params.name, phone:route.params.phone}} onSubmit={(values, clear) =>{
            const editedContact = {
                id: route.params.id,
                name: values.name,
                phone: values.phone
            }
            console.log(values)
            // createContact(values)
            // clear.resetForm()
            //console.log(route)
            if(oldName != values.name || oldPhone !=values.phone){
                axios.put("https://android-contact-server.vercel.app/api/contact", {
                contact_id: route.params.id,
                name: values.name,
                phone: values.phone,
            })
            navigation.navigate('contacts', editedContact )
            } else {
                Alert.alert('Change name or phone')
            }

           }}>
                {(props) => (
                    <View>
                        <TextInput 
                        style={styles.addInput}
                        value={props.values.name}
                        placeholder="Contact name"
                        onChangeText={props.handleChange('name')}
                        maxLength={15}
                        />
                         <TextInput 
                        style={styles.addInput}
                        keyboardType = 'numeric' 
                        value={props.values.phone}
                        placeholder="Contact phone"
                        onChangeText={props.handleChange('phone')}
                        maxLength={15}
                        />
                        <View style={styles.submit}>
                        <Button  title='Create' onPress={props.handleSubmit} />
                        </View>
                        
                    </View>
                )}
           </Formik>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        marginTop: 20,
    },
    titleContainer:{
        marginLeft: '20%',
        width: '60%',
    },
    title:{
        fontSize: 33,
    },
    addInput: {
        heigth: 60,
        width: '80%',
        borderWidth: 1,
        padding: 15,
        marginLeft:'10%',
        marginTop: '10%',
    },
    submit:{
        width: '30%',
        marginLeft: '35%',
        marginTop: '10%',
        backgroundColor: 'green',
    }
  });

  export default UpdateContact;