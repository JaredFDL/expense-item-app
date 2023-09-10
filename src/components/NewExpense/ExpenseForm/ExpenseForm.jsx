import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const onFormSubmit = (event) => {
        //prevent page from refreshing
        event.preventDefault();
        const formData = {
            title,
            amount: `$${amount}`,
            date: new Date(date)//match correct format
        };
        props.addNewExpense(formData);
    };

    const onInputChangeHandler = (event, type) => {
        const value = event.target.value;
        switch (type) {
            case 'title':
                setTitle(value);
                break;
            case 'amount':
                setAmount(value);
                break;
            case 'date':
                setDate(value);
                break;
            default:
                console.error('unknown type');
                break;
        }
    };

    return (
        <form onSubmit={onFormSubmit}>

            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label >Title</label>
                    <input type="text" onChange={(event) => onInputChangeHandler(event, 'title')} value={title} />
                </div>

                <div className='new-expense__control'>
                    <label >Amount</label>
                    <input type="number" onChange={(event) => onInputChangeHandler(event, 'amount')} value={amount} />
                </div>

                <div className='new-expense__control'>
                    <label >Date</label>
                    <input type="date" onChange={(event) => onInputChangeHandler(event, 'date')} value={date} />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>

        </form>
    );
};

export default ExpenseForm;