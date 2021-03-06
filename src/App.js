// import ExpenseItem from "./components/ExpenseItems";
import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";


import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      let newArray = [expense, ...prevExpenses];
      // console.log(newArray[0].date.getFullYear());
      // newArray.filter(filterData(filterData));
      return newArray;
    });
    console.log("In App.js");
    console.log(expense);
  };


  // const [newYear, setNewYear] = useState(0);

  // const filterChangeHandler = selectedYear => {
  //   setNewYear = selectedYear;
  // };
  // const getchildyear = year => {
  //   console.log(year);
  //   return year;
  // };

  // const filterData = expenses => {
  //   console.log(getchildyear());
  //   return expenses.date.getFullYear().toString() === 2020;
  // };

  // const newList = newArray => {
  //   console.log(newArray.filter(filterData));
  //   return newArray.filter(filterData);
  // };
  // console.log(newList(expenses));

  return (
    <div>
      {/* <button onClick={() => setShow(true)}>Add New Expense</button> */}
      <NewExpense
        onAddExpense={addExpenseHandler}
        // show={show}
        // sShow = {setNewShow}
        // onClose={() => setShow(false)}
      ></NewExpense>
      <Expenses itemtest={expenses}></Expenses>
    </div>
  );
}

export default App;
