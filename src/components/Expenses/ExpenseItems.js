import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItem(props) {
  // can only have one root element
  const [title, setTitle] = useState(props.title);
  // let title = props.title
  const clickHandler = () => {
    // title = 'Philip is cool'

    setTitle("Phil is a DBA!");
    // console.log(title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>

        <div className="expense-item__description">
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
