// // important

import {useDispatch, useSelector} from "react-redux";
import {toggleTodo} from "./3_todoActions.jsx";
import {useContext} from "react";
import {FilterContext} from "./5_1_FilterContext.jsx";
import withFilterHOC from "./5_3_withFilterHOC.jsx";


const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const filter = useContext(FilterContext); // without figured brackets

    const filteredTodos = withFilterHOC(todos, filter);


    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    }

    return (
        <div>
            <h1>To_do</h1>
            <ul>
                {filteredTodos.map(todo => (
                    <li key={todo.id} onClick={() => handleToggleTodo(todo.id)}
                        style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                        {todo.text}
                    </li>
                ))}

            </ul>
        </div>)
}


export default TodoList;


{/*{todos.map(todo =>(*/
}
{/*    <li key={todo.id} onClick={()=>handleToggleTodo(todo.id)}>*/
}
{/*        {todo.text}*/
}
{/*    </li>*/
}
{/*))}*/
}