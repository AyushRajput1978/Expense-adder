import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItems";
import Card from "../UI/Card";
import ExpensesFilter from "../EXPENSEFILTER/ExpensesFilter";
import ExpenseChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const yearSelectionHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.exp.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const items = filteredExpenses.map((obj) => {
    return (
      <ExpenseItem
        key={obj.id}
        title={obj.title}
        amount={obj.amount}
        date={obj.date}
      />
    );
  });

  return (
    <Card className="expenses">
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesFilter
        selected={filteredYear}
        onYearSelection={yearSelectionHandler}
      />
      {filteredExpenses.length === 0 && (
        <p className="expenses-list__fallback">No Expenses found</p>
      )}
      {filteredExpenses.length > 0 && items}
    </Card>
  );

  // (<div>
  //     <ExpenseItem
  //       title={prop.exp[0].title}
  //       amount={prop.exp[0].amount}
  //       date={prop.exp[0].date}
  //     />
  //     <ExpenseItem
  //       title={prop.exp[1].title}
  //       amount={prop.exp[1].amount}
  //       date={prop.exp[1].date}
  //     />
  //     <ExpenseItem
  //       title={prop.exp[2].title}
  //       amount={prop.exp[2].amount}
  //       date={prop.exp[2].date}
  //     />
  //     <ExpenseItem
  //       title={prop.exp[3].title}
  //       amount={prop.exp[3].amount}
  //       date={prop.exp[3].date}
  //     />
  //   </div>
  // );
}
export default Expenses;
