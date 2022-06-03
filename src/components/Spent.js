import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Spent = () => {
    const {expense} = useContext(AppContext);

    const totalExpense = expense.reduce((total, item) => {
        return (total += item.amount);
    }, 0)

    return (
        <div className='alert alert-primary'>  
            <span>
                Spent so far: ${totalExpense}
            </span>
        </div>
    )
}

export default Spent;