import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const saveExpenseHandler = function (enteredExpenseData) {
    const expenseData = { id: Math.random().toString(), ...enteredExpenseData };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
    </div>
  );
}

export default NewExpense;
