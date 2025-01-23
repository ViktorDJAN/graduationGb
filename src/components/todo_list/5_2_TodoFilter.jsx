import {useState} from "react";
import {FilterContext} from "./5_1_FilterContext.jsx";


export const TodoFilter = () => {
    const [filter, setFilter] = useState(FilterContext);
    const handleChange = (e) => {
        setFilter(e.target.value);
    };
    return (
        <select value={filter} onChange={handleChange}>
            <option value="all">ALL</option>
            <option value="completed">COMPLETED</option>
            <option value="incomplete">ACTIVE</option>
        </select>
    )
}