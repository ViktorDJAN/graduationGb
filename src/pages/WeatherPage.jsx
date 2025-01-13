import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {useState} from "react";
import axios from "axios";

const WeatherPage = () => {
    const [state, setState] = useState({});
    const [count, setCount] = useState(0);

    const URL_API = "https://api.nasa.gov/insight_weather/";
    const PARAMS = "api_key=hVe4GzjvMd6RyehXhF3fkB3nrdoEpdzDIOvFyGrS&feedtype=json&ver=1.0";


    const getRequestConfig = {
        access_key: "dd014c8909b905da041180615d04b08b",
        query: "Moscow",
    }


    // 1 Axios usage , async
    const res = axios.get('http://api.weatherstack.com/current', {params: getRequestConfig});
    res.then((res) => {
        setState(res.data)
    }).catch((err) => {
        console.log(err)
    })
    //________________________________________________


    // 2 Ordinary XHMHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open("GET", URL_API + "?" + PARAMS, true);
    // onload is an event occurring when got eny response from server
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(xhr.response);
        } else {
            console.log(xhr.status + " " + xhr.responseText);
        }
    }
    //  xhr.send();
   //_____________________________________________________________________________________

    // 3 Promise usage
    // function makeHttpRequest(method, url) {
    //     return new Promise((resolve, reject) => {
    //         var xhr = new XMLHttpRequest();
    //         xhr.open(method, url);
    //         xhr.onload = function () {
    //             if (xhr.status === 200) {
    //                 resolve(xhr.response);
    //             } else {
    //                 reject(xhr.response);
    //             }
    //         }
    //         xhr.send();
    //     })
    // }

    // makeHttpRequest("GET", "https://api.weatherstack.com/current" + "?" + params)
    //     .then(function (data) {
    //         console.log(data);
    //     })
    //     .catch(function (error) {
    //         console.log(error)
    //     })

    //4.






    //  Main logic of Components is below
    function handleBtn1() {
        setCount(count + 1);

    xhr.send();
        console.log(xhr.response);
    }


    return (
        <div>
            <Header/>
            <button onClick={handleBtn1}>Button + {count}</button>

            <h1>Weather</h1>
            <Footer/>

        </div>
    )
}
export default WeatherPage;