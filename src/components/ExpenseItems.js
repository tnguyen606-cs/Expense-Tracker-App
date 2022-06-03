import React, {useContext} from "react";
import {TiDelete} from 'react-icons/ti';
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
    const {dispatch} = useContext(AppContext);

    const deleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        })
    }

    return (
        // list of items
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span>${props.amount}</span>
                {/* <button className="delete-btn">x</button> */}
                <TiDelete size='1.5em' onClick={deleteExpense}></TiDelete>
            </div>       
        </li>
    )
}

export default ExpenseItem;

