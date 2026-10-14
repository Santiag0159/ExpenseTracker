import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const listaGastos = [
  { id: '1', titulo: 'Supermercado', monto: 25000 },
  { id: '2', titulo: 'Combustible', monto: 18000 },
  { id: '3', titulo: 'Internet', monto: 32000},

];

export default function HistorialTransacciones() {
  return (
    <FlatList style={{ flex: 1, backgroundColor: '#c8e5e5' }}
      data={listaGastos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.itemFila}>
          <Text style={styles.titulo}>{item.titulo}</Text>
          <Text style={styles.monto}>${item.monto}</Text>
        </View>
      )}
      ListEmptyComponent={<Text style={styles.vacio}>No hay gastos registrados aún.</Text>}
    /> //agregado por si no hay gastos, que muestre un mensaje avisandolo.
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