import {useState} from "react";
import {useDispatch} from "react-redux";

import {addText} from "./3_todoActions";
import store from "./2_store";


export const InputField = () => {

    const [text, setText] = useState('');
    //Dispatch в React — это метод, который позволяет отправить действие диспетчеру и изменить состояние приложения.
    // Он вызывается у объекта store и вызывает функцию reducer, которая обработает событие и обновит соответствующие поля хранилища.
    const dispatch = useDispatch();

    const handleToAddText = (text) => {
        if (text.length > 0) {
            console.log(addText(text))
            dispatch(addText(text))
            setText("")
        } else {
            console.log("There is nothing to add")
        }


        console.log(store.getState().todos)

    }

    return (
        <div>
            <input type="text" value={text}
                   onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => handleToAddText(text)}>Add
            </button>
        </div>
    )
}