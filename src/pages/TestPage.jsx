// test_link =  https://www.onlinetrade.ru/catalogue/noutbuki-c9/?presets=0&preset_id=0&price1=12250&price2=899299&advanced_search=1&rating_active=0&special_active=1&selling_active=1&producer_active=1&price_active=0&model_active=0&type_active=0&igrovoy_noutbuk_active=1&display_active=0&sens_disp_active=0&tip_matritsi_active=0&surface_lcd_active=0&displ_rez_active=0&chastota_obnovleniya_active=0&mark_cpu_active=0&code_processor_active=0&processor_active=0&kol_vo_yader_active=0&memory_active=0&graphics_chipset_active=0&type_hdd_active=0&hard_drive_active=0&optical_drive_active=0&podsvetka_klaviaturi_active=0&predustanovlena_os_active=0&os_active=0&color_active=0&weight_category_active=0&raskladka_klaviaturi_active=0&page=1

import ProductsSection from "../components/pagination/ProductsSection.jsx";

const link_ozon = "https://market.yandex.ru/?ysclid=m63yxnvgxu617275500&wprid=1737312377711056-14420531971073490123-balancer-l7leveler-kubr-yp-vla-32-BAL&utm_source_service=web&src_pof=703&icookie=64eJ94%2BwJx%2BOaBLDquD6XXutgLj4%2BHou4m4q8LpJh%2FwSdQSnLae9n3v%2FVn7B44c4D%2BBUGxUhF2FhsrJl8MQ08hoxYu0%3D&baobab_event_id=m63yxnvgxu";
import {useEffect, useState} from "react";


const TestPage = () => {

    //  PROXY FOR OBJECTS------------------------------------------
    // target — сам проксированный объект;
    // property — название свойства, к которому идёт обращение;
    // receiver — объект Proxy, через который выполняется проксирование.
    const wrap = obj => {
        return new Proxy(obj, {
            get(target, propKey) {
                console.log(`Reading property "${propKey}"`)
                console.log("Here: " + target[propKey]);
                return target[propKey]
            },

        })
    }
    const user = {firstname: "John", lastname: "Doe", email: "john@example.com"};
    const wrapped = wrap(user);
    console.log(wrapped.firstname)




    // const response = await proxy.get('https://example.com/file.txt');
    // console.log(response.data); // The contents of the file.txt file
    //

    const fetchWeather = async (city) => {
        const url = `http://api.weatherapi.com/v1/current.json?key=fe0fc1a2703a4407b00200425251201&q=${city}&aqi=no`;

        // const response = await proxy.get(`http://api.weatherapi.com/v1/current.json?key=fe0fc1a2703a4407b00200425251201&q=${city}&aqi=no`);
        // http://api.weatherapi.com/v1/current.json?key=fe0fc1a2703a4407b00200425251201&q=Moscow&aqi=no
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    }

    const fetchRequest = async () => {

        // const response = await proxy.get(`http://api.weatherapi.com/v1/current.json?key=fe0fc1a2703a4407b00200425251201&q=${city}&aqi=no`);
        // http://api.weatherapi.com/v1/current.json?key=fe0fc1a2703a4407b00200425251201&q=Moscow&aqi=no
        const res = await fetch(link_ozon,{
            method:"GET",
            mode: "no-cors",
            headers:{
                'Content-Type': 'text/json',
            }
        });
        console.log(res);
    }

    const [city, setCity] = useState()

    useEffect(() => {
        const myInputEl = document.getElementById("myInput");
        myInputEl.addEventListener("input", (event) => {
            setCity(event.target.value);
        })

    });

    function handleInputChange() {
        if (city !== null && city !== undefined) {
            console.log(city);
            fetchWeather(city);
        } else {
            console.log("bad")

        }
    }


    return (
        <div>
            <div>
                <h1 id="hello">Test Page</h1>
                <input placeholder={"Enter a city"} id="myInput" type="text"/>
                <button onClick={fetchRequest}>Press it</button>
            </div>

        </div>

    )
}
export default TestPage;

//   const express = require('express');
// const httpProxy = require('http-proxy');
// const proxy = httpProxy.createProxyServer({});
// const app = express();
// app.get('*', (req, res) => {
//     console.log('Request', req.method, req.url);
//     proxy.web(req, res, { target: `${req.protocol}://${req.hostname}` });
// });
// app.listen(3000, () => console.log('Application started on port 3000'));

// const axios = require('axios');
// async function doGetRequest() {
//     const res = await axios.get('http://webcode.me', { proxy: { host: 'localhost', port: 3000 } });
//     console.log(res.data);
// }
//doGetRequest();
