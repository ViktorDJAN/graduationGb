export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';


//3
export const addText = (text) => ({
        type: "ADD_TODO",
        payload: text
    }

)

export const toggleTodo = (id) => ({
    type: "TOGGLE_TODO",
    payload: {id}
})

