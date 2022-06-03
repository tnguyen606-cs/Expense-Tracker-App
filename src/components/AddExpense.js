import React, { useContext, userContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import {v4 as uuidv4} from 'uuid'; // this a random id 

export const AddExpense = () => {
    const {dispatch} = useContext(AppContext);

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        
        // alert('name ' + name + ' amount' + amount);

        const expense = {
            id: uuidv4(),
            name: name,
            amount: parseInt(amount),
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        })
    }

    return (
        <div>
            <h3 className="mt-3">Add Expense</h3>
            <div className="col-sm">
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-sm">
                            <label htmlFor='name'>Name</label>
                            <input 
                                id='name' 
                                required='required' 
                                type='text' 
                                className="form-control"
                                value = {name}
                                onChange = {(e) => setName(e.target.value)}
                            ></input>
                        </div>
                        <div className="col-sm">
                            <label htmlFor='cost'>Enter amount...</label>
                            <input 
                                id='cost' 
                                required='required' 
                                type='text' 
                                className="form-control"
                                value = {amount}
                                onChange = {(e) => setAmount(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className='col-sm'>
                                <button id='save' type='save' className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddExpense;