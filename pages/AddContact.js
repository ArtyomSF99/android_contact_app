import { Formik } from "formik";
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { StyleSheet } from "react-native-web";

const AddContact = ({createContact}) => {
    const [modalWindow, setModalWindow] = useState(true)
    

    return(
        <View style={styles.main}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Create contact</Text>
            </View>
           <Formik initialValues={{name:'', phone:''}} onSubmit={(values, clear) =>{
            createContact(values)
            clear.resetForm()
            
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

  export default AddContact;