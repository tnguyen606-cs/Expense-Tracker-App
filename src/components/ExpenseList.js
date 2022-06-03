import React, { useContext } from "react";
import ExpenseItems from "./ExpenseItems";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
    // try to create a dummy or hard-coded lists of expenses, then we will render
    // the dummy list out in our jsx
    // an array "expenses" contains different things about a given expense
    const { expense } = useContext(AppContext);

    // const expense = [ // This is a dummy expense before we use context hook
    //     {id: 1, name: "Shopping", cost: 50},
    //     {id: 2, name: "Fuel", cost: 60},
    //     {id: 3, name: "Food", cost: 70},
    //     {id: 4, name: "Transportation", cost: 80},
    //     {id: 5, name: "Others", cost: 50},
    // ];

    return (
        // ul is a list
        // map function is used to flip over an array of objects
        // This is used to accept some values as props and 
        // then display those values on UI by passing the "id" + "name" + "cost" as prop
        <div> 
            <h3 className="mt-3">Expenses</h3>
            <ul>
            {expense.map((expense) => (
                <ExpenseItems 
                    id={expense.id} 
                    name={expense.name} 
                    amount={expense.amount} /> 
            ))}
            </ul>
        </div>
    )
}

export default ExpenseList;