import './App.css'

import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import WeatherPage from "./pages/WeatherPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import TestPage from "./pages/TestPage.jsx";


function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/services" element={<ServicesPage/>}/>
                    <Route path="/registration" element={<RegistrationPage/>}/>
                    <Route path="/weather" element={<WeatherPage/>}/>
                    <Route path="/chat" element={<ChatPage/>}/>
                    <Route path="/test_page" element={<TestPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>

    )
}

export default App
