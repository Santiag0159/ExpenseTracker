import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { ExpensesProvider } from './src/context/ExpensesContext';

export default function App() {
  return (
    <ExpensesProvider>
      <NavigationContainer
        linking={{
          config: {
            screens: {
              MainTabs: {
                screens: {
                  Inicio: '',
                  MisGastos: 'expenses',
                },
              },
              ExpenseDetail: 'expenses/:id',
            },
          },
        }}
      >
        <StackNavigator />
      </NavigationContainer>
    </ExpensesProvider>
  );
}