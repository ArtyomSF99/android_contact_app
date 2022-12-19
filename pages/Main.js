import React, { useEffect, useState } from "react";
import {
  Button,
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Modal,
  TextInput
} from "react-native";
import { StyleSheet } from "react-native-web";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import AddContact from "./AddContact";

export default function Main({ route, navigation }) {
  const [windowModal, setWindowModal] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [tmp ,setTmp] = useState([])
  const [searchContacts, setSearchContacts] = useState([])
  const[nameSearchQuery, setNameSearchQuery] = useState('')
  const [phoneSearchQuery, setPhoneSearchQuery] = useState('')
  const [colors, setColors] = useState(["#63b598",	"#ce7d78",	"#ea9e70",	"#a48a9e",	"#c6e1e8",	"#648177",	"#0d5ac1",
  "#f205e6",	"#1c0365",	"#14a9ad",	"#4ca2f9",	"#a4e43f",	"#d298e2",	"#6119d0",
  "#d2737d",	"#c0a43c",	"#f2510e",	"#651be6",	"#79806e",	"#61da5e",	"#cd2f00",
  "#9348af",	"#01ac53",	"#c5a4fb",	"#996635",	"#b11573",	"#4bb473",	"#75d89e",
  "#2f3f94",	"#2f7b99",	"#da967d",	"#34891f",	"#b0d87b",	"#ca4751",	"#7e50a8",
  "#c4d647",	"#e0eeb8",	"#11dec1",	"#289812",	"#566ca0",	"#ffdbe1",	"#2f1179",
  "#935b6d",	"#916988",	"#513d98",	"#aead3a",	"#9e6d71",	"#4b5bdc",	"#0cd36d",
  "#250662",	"#cb5bea",	"#228916",	"#ac3e1b",	"#df514a",	"#539397",	"#880977",
  "#f697c1",	"#ba96ce",	"#679c9d",	"#c6c42c",	"#5d2c52",	"#48b41b",	"#e1cf3b",
  "#5be4f0",	"#57c4d8",	"#a4d17a",	"#225b8",	"#be608b",	"#96b00c",	"#088baf",
  "#f158bf",	"#e145ba",	"#ee91e3",	"#05d371",	"#5426e0",	"#4834d0",	"#802234",
  "#6749e8",	"#0971f0",	"#8fb413",	"#b2b4f0",	"#c3c89d",	"#c9a941",	"#41d158",
  "#fb21a3",	"#51aed9",	"#5bb32d",	"#807fb",	"#21538e",	"#89d534",	"#d36647",
  "#7fb411",	"#0023b8",	"#3b8c2a",	"#986b53",	"#f50422",	"#983f7a",	"#ea24a3",
  "#79352c",	"#521250"])
  
  useEffect(() => {
    axios
      .get("https://android-contact-server.vercel.app/api/contacts")
      .then((response) => {
        setContacts([...contacts, ...response.data])
        setSearchContacts([...searchContacts, ...response.data])
      })
      .catch((e) => console.log(e));
  }, []);
  const createContact = (contact) => {
    contact.color = Math.floor(Math.random() * (100 - 0));
    axios.post("https://android-contact-server.vercel.app/api/contact", {
      name: contact.name,
      phone: contact.phone,
      color: contact.color,
    });
    contact.id=contacts[0].id+1

    setContacts([contact, ...contacts]);
    setSearchContacts([contact, ...searchContacts]);
    setWindowModal(false);
  };
   
  const contactDelete = (id) => {

     axios.delete('https://android-contact-server.vercel.app/api/contact',
    { data: { contact_id:id } });
    setContacts(contacts.filter(c => c.id !== id))
    setSearchContacts(searchContacts.filter(c => c.id !== id))
  };
  // const searchContact = () => {
  //   // const test = contacts.filter(contact=>contact.name.toLowerCase().includes(searchQuery))
  //   // console.log(test)
  //   // setSearchContacts([...searchContacts, ...test])
  //   //  console.log(searchContacts)
  // }
  const refresh = () =>{
    try{
      const change = contacts
      change.map(el=> {
      if(el.id == route.params.id){
        el.name= route.params.name
        el.phone=route.params.phone
      }
    })
  
    setContacts([...change])
    } catch(e){
      console.log(e)
    }
  }
  const searchName = () =>{
    const test = contacts.filter(contact=>contact.name.toLowerCase().includes(nameSearchQuery.toLowerCase()))
                              
     setSearchContacts([...test]) 
     console.log(nameSearchQuery)
     console.log(searchContacts)
  }
  return (
    <View style={styles.main}>
      <Modal visible={windowModal}>
        <View style={styles.backIcon}>
          <Ionicons name="arrow-back" size={36} color="black" onPress={() => setWindowModal(false)}/>
        </View>
        <AddContact createContact={createContact} />
      </Modal>
      <TextInput 
                        style={styles.addInput}
                        value = {nameSearchQuery}
                        // onChange = {e => {
                        //   setSearchContacts([])
                        //   // console.log(e.target.value)
                        //   // setNameSearchQuery(e.target.value)
                        //   }}
                          onChangeText={text => {
                            setSearchContacts([])
                            setNameSearchQuery(text)
                            const test = contacts.filter(contact=>contact.name.toLowerCase().includes(nameSearchQuery.toLowerCase()))
                              
                              setSearchContacts([...test]) 
                            }}
                        placeholder="Search name"
                          
                        maxLength={15}
                        />
                      
                        <TextInput 
                        style={styles.addInput}
                        value = {phoneSearchQuery}
                        onChangeText={text => {
                            setSearchContacts([])
                            setPhoneSearchQuery(text)
                            const test = contacts.filter(contact=>contact.phone.toLowerCase().includes(phoneSearchQuery.toLowerCase()))
                              
                              setSearchContacts([...test]) 
                            }}
                        placeholder="Search phone"
                      
                        maxLength={15}
                        />
                        <View style={styles.createContact}>
    
      <View style={styles.contactBtn}>
  <View style={styles.contactCreate}>
  <Button  title="Create contact" color={'green'} onPress={() => setWindowModal(true)}/>
  </View>
  <View style={styles.contactRefresh}>
  <Button title="Refresh" color={'blue'} onPress={refresh}/>
  </View>
      
  </View> 
      </View>
     

      <FlatList
        style={{ marginTop: 30, marginBottom: 100 }}
        data={!nameSearchQuery && !phoneSearchQuery?contacts:searchContacts}
        renderItem={({ item }) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("contact", {
                id: item.id,
                name: item.name,
                phone:item.phone,
                color:colors[item.color],
                contactDelete
              }, )}
            >
              <View style={styles.contact} key={item.id}>
                <View style={[styles.avatar, { backgroundColor: colors[item.color] }]}>
               
                <Text style={styles.avatarHeader}>
                    {item.name[0].toUpperCase()}
                  </Text>
              
                 
                </View>
                <View>
                  <Text style={styles.contactName}>{item.name}</Text>
                  <Text style={styles.contactNumber}>{item.phone}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingBottom: '40%',
  },
  contact: {
    flexDirection: "row",
    height: 80,
    alignItems: "center",
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: 20,
    backgroundColor: "#dae1e3",
    padding: 15,
    borderRadius: 15,
  },
  avatar: {
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
  
  },
  
  avatarHeader: {
    fontSize: 42,
    color: "#fff",
  },
  contactName: {
    marginLeft: 30,
    fontSize: 14,
  },
  contactNumber: {
    marginLeft: 30,
    fontSize: 24,
    color: "gray",
  },
  backIcon: {
    marginLeft: '5%',
    marginTop: '5%',
  },
  createContact: {
    marginTop: '5%',
    marginLeft: '20%',
    width: '60%',
  },
  addInput: {
    heigth: 40,
    width: '80%',
    borderWidth: 0.5,
    padding: 10,
    marginLeft:'10%',
    marginTop: '10%',
},
footer: {
  height: 100,
},
contactBtn:{
  flexDirection: 'row',
  marginLeft: '5%',
  marginRight: '5%',
},
contactCreate: {
  borderRadius: 15,
},
contactRefresh: {
 
  marginLeft: '20%',
  borderRadius: 15,
}
});
