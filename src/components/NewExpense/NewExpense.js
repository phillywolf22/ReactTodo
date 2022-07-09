import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = props => {

  const [show, setShow] = useState(false);
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    // console.log("in NewExpense");
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setView()
  };
  const setView = () => {
    return setShow(false);
    // return console.log(`this is view ${props.show}`)
  };
 
  if (!show) {
    return <div className="new-expense">
    <button onClick={() => setShow(true)}>Add New Expense</button>
    </div>;
  }
  return (
    <div className="new-expense">
     
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onClose={setView}
      ></ExpenseForm>
    </div>
  );
};

export default NewExpense;

// import React from 'react';

// import ExpenseForm from './ExpenseForm';
// import './NewExpense.css';

// const NewExpense = () => {
//   return (
//     <div className='new-expense'>
//       <ExpenseForm />
//     </div>
//   );
// };

// export default NewExpense;
