// 2

import {configureStore} from "@reduxjs/toolkit";
import {inputFieldReducer} from "./1_inputFieldReducer";


// Create a Redux store holding the state of the counter
// const store = createStore(counterReducer);

const store = configureStore({

        reducer: {
            todos: inputFieldReducer,
        },


    }
)


export default store