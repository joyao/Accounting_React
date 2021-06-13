import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <div className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {props.items.map((i) => {
                return <ExpenseItem title={i.title} date={i.date} amount={i.amount} />;
            })}
        </div>
    );
};
export default Expenses;
