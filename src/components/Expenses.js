import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
    return (
        <div className="expenses">
            <ExpenseItem
                title={props.items[0].title}
                date={props.items[0].date}
                amount={props.items[0].amount}
            ></ExpenseItem>
        </div>
    );
};
export default Expenses;
