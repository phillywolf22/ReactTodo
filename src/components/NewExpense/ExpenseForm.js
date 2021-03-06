import "./ExpenseForm.css";

import React, { useState } from "react";
const ExpenseForm = props => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
  };

  const convertDate = date => {
    const rawdate = new Date(date);
    const offsetDate = rawdate.getTimezoneOffset() * 60000;
    const newDate = new Date(rawdate.getTime() + offsetDate);
    return newDate;
  };

  const submitHandler = event => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: convertDate(enteredDate),
    };
    // console.log("onsubmit date");
    // console.log(expenseData.date);
    // console.log(expenseData)
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  // const closeModal = () => {
  //   props.onClose();
  // };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            // min="2019-01-01"
            // max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
