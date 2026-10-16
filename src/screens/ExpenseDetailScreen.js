//parte de pupin

import React, { useState } from 'react';
import { TextInput, StyleSheet,View, Button, Alert, } from 'react-native';

export default function CamposFormulario() {
	const [nombreGasto, setNombreGasto] = useState('');
    const [monto, setMonto] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleGuardar = () => {
     Alert.alert('¡Éxito!', 'El gasto ha sido registrado correctamente.');
  };

	return (
        <>
            <TextInput
            style={styles.input}
            placeholder="Nombre del gasto"
            keyboardType="default"
            value={nombreGasto}
            onChangeText={setNombreGasto}
            />

            <TextInput
                style={styles.input}
                placeholder="Monto ($)"
                keyboardType="numeric"
                value={monto}
                onChangeText={setMonto}
            />
        
            <TextInput
            style={styles.input}
            placeholder="Categoría"
            keyboardType="default"
            value={categoria}
            onChangeText={setCategoria}
            />

            <View style={styles.contenedor}>
             <Button //button mas adelante se puede cambiar por <Pressable> o <TouchableOpacity> para estilizarlos a nuestro antojo.
                 title="Guardar Gasto"
                 onPress={handleGuardar}
                 color="#2a514b"
             /> 
            </View>
        </>
	);
}

const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		borderColor: '#cccccc',
		padding: 12,
		borderRadius: 6,
        marginBottom: 12,
	},

    contenedor: {
    padding: 16,
    },
});