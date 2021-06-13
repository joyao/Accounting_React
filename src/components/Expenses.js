import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
    return (
        <div className="expenses">
            {props.items.map((i) => {
                return <ExpenseItem title={i.title} date={i.date} amount={i.amount} />;
            })}
        </div>
    );
};
export default Expenses;
