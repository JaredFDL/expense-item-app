import './ExpenseItem.css'
//import { useState } from 'react';
import ExpenseItemCard from '../ExpenseItemCard/ExpenseItemCard';



const ExpenseItem = (props) => {
    const date = props.date;
    const month = date.toLocaleDateString('en-AU', { month: 'long' });
    const day = date.toLocaleDateString('en-AU', { day: '2-digit' });
    const year = date.getFullYear();

    return (
        <ExpenseItemCard>
            <div className='expense-date'>
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__year'>{year}</div>
                <div className='expense-date__day'>{day}</div>
            </div>

            <div className='expense-item__description'>
                <h2 className='expense-item__title'>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </ExpenseItemCard>


    );
};

export default ExpenseItem;