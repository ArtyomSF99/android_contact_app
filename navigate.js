import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './pages/Main';
import Contact from './pages/Contact';
import UpdateContact from './pages/UpdateContac';
import AddContact from './pages/AddContact';


const Stack = createStackNavigator()

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name = "contacts"
                component ={Main}
                options ={{title:'Contacts'}}
            />
             <Stack.Screen 
                name = "contact"
                component ={Contact}
                options ={{title:'Contact Info'}}
            />
            <Stack.Screen 
                name = "updateContact"
                component ={UpdateContact}
                options ={{title:'Update Contact'}}
            />
            <Stack.Screen 
                name = "addContact"
                component ={AddContact}
                options ={{title:'Create Contact'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}