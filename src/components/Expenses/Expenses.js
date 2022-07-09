import React, { useState } from "react";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import Phildawg from "./Phildawg";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = selectedYear => {
    //console.log("Expenses.js");
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.itemtest.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <p>No Expenses Found.</p>

  // if (filteredExpenses > 0){
  //   expensesContent = filteredExpenses.map(expense => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ))
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses = {filteredExpenses} />
        <ExpensesList items={filteredExpenses} />

        <Phildawg />
      </Card>
    </div>
  );
}

export default Expenses;
