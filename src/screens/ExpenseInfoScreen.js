import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useExpenses } from '../context/ExpensesContext';

export default function ExpenseInfoScreen({ route }) {
  const { getExpenseById } = useExpenses();
  const expense = getExpenseById(route.params?.id);

  if (!expense) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFound}>No se encontró el gasto solicitado :c</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{expense.titulo}</Text>
      <Text style={styles.monto}>${Number(expense.monto).toLocaleString()}</Text>
      <Text style={styles.categoria}>Categoría: {expense.categoria}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    color: '#2C3E50',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  monto: {
    color: '#2a514b',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoria: {
    color: '#34495E',
    fontSize: 16,
  },
  notFound: {
    color: '#34495E',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 32,
  },
});
