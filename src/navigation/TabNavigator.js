import React from 'react';
import { Button, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ExpensesScreen from '../screens/ExpensesScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator({ navigation }) {
    return (
    <Tab.Navigator
        screenOptions={({ route}) => ({
            tabBarIcon: ({focused,color, size}) =>(
                route.name === 'Inicio' ? (
                    <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
                ) : (
                    <Image source={require('../assets/billetera.png')} style={{ width: size, height: size, tintColor: color }} />
          )
            ),
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen 
        name="Inicio" 
        component={HomeScreen} 
        />
        <Tab.Screen 
        name="MisGastos" 
        component={ExpensesScreen} 
        options={{
            title: 'Mis Gastos',
            headerRight: () => (
            <Button 
                title="+ Nuevo" 
                onPress={() => navigation.navigate('PantallaFormulario')} 
            />
            ),
        }}
        />
    </Tab.Navigator>
    );
}