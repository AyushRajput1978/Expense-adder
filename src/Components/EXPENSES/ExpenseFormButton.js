import React, { useState } from "react";
const ExpenseFormButton = (props) => {
  const [click, setClick] = useState(false);
  const addExpenseClickHandler = () => {
    setClick(true);
  };
  const actionHandler = (e) => {
    setClick(false);
  };

  const form = (
    <form onSubmit={props.submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={props.enteredTitle}
            onChange={props.titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            value={props.enteredAmount}
            onChange={props.amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={props.enteredDate}
            onChange={props.dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="cancel" onClick={actionHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );

  if (!click) {
    return (
      <div>
        <button onClick={addExpenseClickHandler}>Add Expense</button>
      </div>
    );
  }
  return <div>{form}</div>;
};
export default ExpenseFormButton;
