import React, { useState } from "react";
import Expenses from "./Components/EXPENSES/Expenses";
import NewExpense from "./Components/NEWEXPENSE/NewExpense";

const dummy_Expenses = [
  {
    id: "e1",
    title: "Grocery",
    amount: 5000,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 35000, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Bike Insurance",
    amount: 1440,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 4000,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(dummy_Expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  console.log(expenses);
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses exp={expenses} />
    </div>
  );
}

export default App;
