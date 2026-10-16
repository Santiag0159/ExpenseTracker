import React from 'react';  
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return ( 
        <View style={styles.container}>
            <Text style={styles.appName}>Expense Tracker    
            </Text>

            <Text style={styles.welcomeMessage}>
                ¡Bienvenido/a a Expense Tracker!
            </Text>

            <Text style={styles.description}>
                Esta aplicación te permite llevar un registro de tus gastos y administrar tus finanzas personales de manera eficiente.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2C3E50',
        marginBotton: 10,
    },
    welcomeMessage: {
        justifyContent: 'center',
        fontSize: 24,
        color: '#34495E',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        color: '#7F8C8D',
        textAlign: 'center',
        lineHeight: 24,
    },
});