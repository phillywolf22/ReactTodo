import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItems";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import Phildawg from "./Phildawg";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = selectedYear => {
    //console.log("Expenses.js");
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.itemtest.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <h2>Let's get started!</h2>
        <p>This is also visible</p>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.length === 0 ? (
          <p>No Expenses foung.</p>
        ) : (
          filteredExpenses.map(expense => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}

        <Phildawg />
      </Card>
    </div>
  );
}

export default Expenses;
