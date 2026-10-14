import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>BIENVENIDOS</Text>
      <Text>Programacion III</Text>
      <Text>Grupo 8</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8e5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});