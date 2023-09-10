import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const onAddNewExpense = (newExpense) => {
        props.addNewExpense(newExpense);
    };
    return (
        <div className='new-expense'>
            <ExpenseForm addNewExpense={onAddNewExpense} />
        </div>
    );
};

export default NewExpense;