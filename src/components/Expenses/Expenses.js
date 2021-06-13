import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString());

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesList items={filteredExpenses}></ExpensesList>
        </div>
    );
};
export default Expenses;
