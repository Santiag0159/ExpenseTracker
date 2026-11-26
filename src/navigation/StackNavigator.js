import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import ExpenseDetailScreen from '../screens/ExpenseDetailScreen';
import ExpenseInfoScreen from '../screens/ExpenseInfoScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
    <Stack.Navigator>
        <Stack.Screen 
        name="MainTabs" 
        component={TabNavigator} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="PantallaFormulario" 
        component={ExpenseDetailScreen} 
        options={{ 
            title: 'Agregar Gasto',
            presentation: 'modal'
        }} 
        />
        <Stack.Screen
        name="ExpenseDetail"
        component={ExpenseInfoScreen}
        options={{ title: 'Detalle del gasto' }}
        />
    </Stack.Navigator>
    );
}