import "./ExpenseForm.css";
import React, { useState } from "react";
import ExpenseFormButton from "../EXPENSES/ExpenseFormButton";
function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(event.target.value);
  };
  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(event.target.value);
  };
  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(event.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newExpenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(newExpenseData);
    console.log(newExpenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <ExpenseFormButton
      enteredTitle={enteredTitle}
      titleChangeHandler={titleChangeHandler}
      enteredAmount={enteredAmount}
      amountChangeHandler={amountChangeHandler}
      enteredDate={enteredDate}
      dateChangeHandler={dateChangeHandler}
      submitHandler={submitHandler}
    />
  );
}
export default ExpenseForm;
