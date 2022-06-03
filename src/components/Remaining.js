import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

// function calculates the remainning of budget
const Remainning = () => {
    const { expense, budget} = useContext(AppContext);

    // find the total expenses
    const totalExpense = expense.reduce((total, item) => {
        return (total = total + item.amount);
    }, 0)

    // create a variable to alert if the expense < $0
    const alert_type = totalExpense > budget ? 'alert-danger' : 'alert-success'

    return (
        <div className={`alert ${alert_type}`}>   
            <span>
                Remainning: ${budget - totalExpense}
            </span>
        </div>
    )
}

export default Remainning;