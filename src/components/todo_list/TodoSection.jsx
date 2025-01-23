import TodoList from "./5_TodoList.jsx";
import {InputField} from "./4_InputField.jsx";
import {FilterProvider} from "./5_1_FilterContext.jsx";
import {Provider} from "react-redux";
import {TodoFilter} from "./5_2_TodoFilter.jsx";
import store from "./2_store.jsx"

const ToDoSection = ()=>{

    return(
        <Provider store={store}>
            <FilterProvider>
                <TodoList/>
                <InputField/>
                <TodoFilter/>

            </FilterProvider>
        </Provider>
    )
}
export default ToDoSection;