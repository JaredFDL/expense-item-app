import './Expenses.css';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
    const [filter, setFilter] = useState('2022');

    const onFilterSelected = (filter) => {
        setFilter(filter);
    };

    const expenses = props.expenses;

    const filteredExpense = expenses
        .filter(
            expense => expense.date.getFullYear().toString() === filter
        );


    let expenseContent = <p className='no-result'>No result found</p>;

    if (filteredExpense && filteredExpense.length > 0) {
        expenseContent = filteredExpense
            .map(expense =>
                <ExpenseItem
                    date={expense.date}
                    title={expense.title}
                    amount={expense.amount}
                />)
    }

    return (
        <div className='expenses'>
            <ExpensesFilter onSelect={onFilterSelected} selected={filter} />
            {expenseContent}
        </div>

    );

}

//default import/export: without curly bracket, no need to make name be the same, one file only has one default export
//named import/export: using curly bracket, can be renamed, used to solve naming conflict.
//import {name as ...} from ...
export default Expenses;
