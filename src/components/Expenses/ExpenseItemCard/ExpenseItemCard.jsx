import './ExpenseItemCard.css';

const ExpenseItemCard = (props) => {
    return (
        <div className='card'>
            {props.children}
        </div>
    );
};

export default ExpenseItemCard;