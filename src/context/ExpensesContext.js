import React, { createContext, useContext, useState } from 'react';
import { INITIAL_EXPENSES } from '../data/initialExpenses';

const ExpensesContext = createContext(null);

export function ExpensesProvider({ children }) {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const [isLoaded] = useState(true);//True Temporal

  const addExpense = (expense) => {
    const newExpense = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      ...expense,
    };
    setExpenses((prev) => [newExpense, ...prev]);
  };

  const removeExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const getExpenseById = (id) => expenses.find((expense) => expense.id === id);

  return (
    <ExpensesContext.Provider
      value={{ expenses, isLoaded, addExpense, removeExpense, getExpenseById }}
    >
      {children}
    </ExpensesContext.Provider>
  );
}

export function useExpenses() {
  const context = useContext(ExpensesContext);
  if (!context) {
    throw new Error('useExpenses debe usarse dentro de un ExpensesProvider');
  }
  return context;
}