import React from 'react';
import { Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ExpensesScreen from '../screens/ExpensesScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator({ navigation }) {
    return (
    <Tab.Navigator>
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