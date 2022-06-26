import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React from "react";

const NewExpense = props => {
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    // console.log("in NewExpense");
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
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
