import React, { useState } from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = function () {
    setTitle("updated!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item">{title}</h2>
        <p className="expense-item__price">{props.amount} rupees</p>
      </div>
      <button onClick={clickHandler}>Change the Title</button>
    </Card>
  );
}
export default ExpenseItem;
