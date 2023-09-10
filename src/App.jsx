import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const initialExpenses = [
    {
      date: new Date(2022, 0, 20),
      title: 'Car Insurance',
      amount: '$1000'
    },
    {
      date: new Date(2022, 0, 25),
      title: 'Toilet paper',
      amount: '$1.5'
    },
    {
      date: new Date(2022, 0, 30),
      title: 'Myki top up',
      amount: '$20'
    },
  ];


  const [expenses, setExpenses] = useState(initialExpenses);

  const onAddNewExpense = (newExpense) => {
    // setExpense is an async method.
    setExpenses([...expenses, newExpense]);//shallow copy
  }

  return (
    <div className="App">
      <NewExpense addNewExpense={onAddNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
