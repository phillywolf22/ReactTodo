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
  return (
    <div>
      <Card className="expenses">
        <h2>Let's get started!</h2>
        <p>This is also visible</p>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpenseItem
          title={props.itemtest[0].title}
          amount={props.itemtest[0].amount}
          date={props.itemtest[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.itemtest[1].title}
          amount={props.itemtest[1].amount}
          date={props.itemtest[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.itemtest[2].title}
          amount={props.itemtest[2].amount}
          date={props.itemtest[2].date}
        ></ExpenseItem>
        <Phildawg />
      </Card>
    </div>
  );
}

export default Expenses;
