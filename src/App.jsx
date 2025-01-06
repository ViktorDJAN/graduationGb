import './App.css'

import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import Registration_Page from "./pages/Registration_Page.jsx";


function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path={"/registration"} element={<Registration_Page/>}/>
                </Routes>
            </BrowserRouter>
        </div>

    )
}

export default App
