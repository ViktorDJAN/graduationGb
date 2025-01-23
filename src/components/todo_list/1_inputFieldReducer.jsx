let initialState = [];
let counter = 0;

export const inputFieldReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, {id: counter++, text: action.payload, completed: false}];
        case "TOGGLE_TODO":
            return state.map(todo =>
                todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo);

        default:

            return state; // Keep in mind / specifying is obligatory
    }
}


