import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useExpenses } from '../context/ExpensesContext';

export default function HistorialTransacciones() {
  const { expenses } = useExpenses();

  return (
    <FlatList
      style={{ flex: 1, backgroundColor: '#c8e5e5' }}
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.itemFila}>
          <Text style={styles.titulo}>{item.titulo}</Text>
          <Text style={styles.monto}>${item.monto}</Text>
        </View>
      )}
      ListEmptyComponent={
        <Text style={styles.vacio}>No hay gastos registrados aún.</Text>
      }
    />
  );
}

const styles = StyleSheet.create({
  itemFila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  titulo: { fontSize: 16, fontWeight: '500' },
  monto: { fontSize: 16, color: '#2a514b', fontWeight: 'bold' },
  vacio: { textAlign: 'center', marginVertical: 32, color: '#2a514b' },
});