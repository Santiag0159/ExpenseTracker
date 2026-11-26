import React from 'react';  
import { View, Text, StyleSheet } from 'react-native';
import { useExpenses } from '../context/ExpensesContext';

export default function HomeScreen() {
    const { expenses } = useExpenses();
    const total = expenses.reduce(
        (sum, expense) => sum + (Number(expense.monto) || 0),
        0,
    );

    return ( 
        <View style={styles.container}>
            <Text style={styles.appName}>Expense Tracker    
            </Text>

            <Text style={styles.welcomeMessage}>
                ¡Bienvenido/a a Expense Tracker :D!
            </Text>

            <Text style={styles.description}>
                Esta aplicación te permite llevar un registro de tus gastos y administrar tus finanzas personales de manera eficiente.
            </Text>
            <View style={styles.resumen}>
                <View style={styles.tarjeta}>
                    <Text style={styles.etiqueta}>Total gastado</Text>
                    <Text style={styles.valor}>${total.toLocaleString()}</Text>
                </View>
                <View style={styles.tarjeta}>
                    <Text style={styles.etiqueta}>Movimientos</Text>
                    <Text style={styles.valor}>{expenses.length}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#f5f5f5',
        },
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2C3E50',
        marginBottom: 10,
    },
    welcomeMessage: {
        textAlign: 'center',
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
    resumen: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 28,
    },
    tarjeta: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        marginHorizontal: 6,
        borderRadius: 10,
        backgroundColor: '#ffffff',
    },
    etiqueta: {
        color: '#7F8C8D',
        fontSize: 14,
        marginBottom: 8,
    },
    valor: {
        color: '#2a514b',
        fontSize: 20,
        fontWeight: 'bold',
    },
});