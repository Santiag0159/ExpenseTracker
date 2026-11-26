import React from 'react';
import {
  Alert,
  FlatList,
  Platform,
  Pressable,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { useExpenses } from '../context/ExpensesContext';

export default function ExpensesScreen({ navigation }) {
  const { expenses, removeExpense } = useExpenses();

  const confirmDelete = (expense) => {
    const deleteExpense = () => removeExpense(expense.id);

    if (Platform.OS === 'web') {
      if (typeof window !== 'undefined' && window.confirm(`¿Eliminar "${expense.titulo}"?`)) {
        deleteExpense();
      }
      return;
    }

    Alert.alert(
      'Eliminar gasto',
      `¿Estás seguro de que quieres eliminar "${expense.titulo}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Eliminar', style: 'destructive', onPress: deleteExpense },
      ],
    );
  };

  return (
    <FlatList
      style={{ flex: 1, backgroundColor: '#f5f5f5' }}
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.itemFila}>
          <Pressable
            style={styles.detalle}
            accessibilityRole="button"
            accessibilityLabel={`Ver detalle de ${item.titulo}`}
            onPress={() => navigation.navigate('ExpenseDetail', { id: item.id })}
          >
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.monto}>${item.monto}</Text>
          </Pressable>
          <Pressable
            style={styles.botonEliminar}
            accessibilityRole="button"
            accessibilityLabel={`Eliminar ${item.titulo}`}
            onPress={() => confirmDelete(item)}
          >
            <Text style={styles.textoEliminar}>Eliminar</Text>
          </Pressable>
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
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e4e4',
  },
  detalle: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  titulo: { fontSize: 16, fontWeight: '500' },
  monto: { fontSize: 16, color: '#2a514b', fontWeight: 'bold' },
  botonEliminar: { marginLeft: 12, paddingVertical: 8, paddingHorizontal: 10 },
  textoEliminar: { color: '#b42318', fontWeight: '600' },
  vacio: { textAlign: 'center', marginVertical: 32, color: '#2a514b' },
});