import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/Registration.css";
import axios from "axios";

const WeatherPage = () => {

    /**
     *   Remote API we use  http://api.weatherapi.com/v1/current.json?key=fe0fc1a2703a4407b00200425251201&q=Moscow&aqi=no
     */
    const requestConfigs = {
        key: "fe0fc1a2703a4407b00200425251201",
        query: "",
        aqi: "no",
    }

    async function getApi(configParams) {
        return axios.get('http://api.weatherapi.com/v1/current.json', {params: configParams});
    }

    async function showData() {
        console.log("Pressed")
        const inputFieldEl = document.getElementById("city_name_input");
        console.log(inputFieldEl.value)
        requestConfigs.query = inputFieldEl.value;
        console.log(requestConfigs)
        const gottenObj = await getApi(requestConfigs); // getting asynchronously json from remote api and assign it to the variable
        console.log(gottenObj)

        inputFieldEl.value = ""; // make it empty
        const h1_el_city_name_field = document.getElementById("city_name_h1");
        const h2_el_country_field = document.getElementById("country_h2");
        const h2_el_local_time_field = document.getElementById("localtime_h2");
        const h2_el_temperature_field = document.getElementById("temperature_h2");
        const h2_el_pressure_field = document.getElementById("pressure_h2");

        h1_el_city_name_field.innerHTML = gottenObj.data.location.name;
        h2_el_country_field.innerHTML = gottenObj.data.location.country;
        h2_el_local_time_field.innerHTML = gottenObj.data.location.localtime;
        h2_el_temperature_field.innerHTML = gottenObj.data.current.temp_c;
        h2_el_pressure_field.innerHTML = gottenObj.data.current.pressure_mb;
    }

    return (
        <div>
            <Header/>
            <h1>Write a city name to know weather</h1>
            <div className="city_input">
                <div>
                    <p className={"text_row_p"}>City name</p>
                </div>
                <input className={"ordinary_input"} id={"city_name_input"} type="text"/>
            </div>
            <div className="city_data_block">
                <h1 className="city_h1" id={"city_name_h1"}>City_name</h1>
                <h2 className="city_info_field_h2" id={"country_h2"}>Country</h2>
                <h2 className="city_info_field_h2" id={"localtime_h2"}>Localtime</h2>
                <h2 className="city_info_field_h2" id={"temperature_h2"}>Temperature</h2>
                <h2 className="city_info_field_h2" id={"pressure_h2"}>Pressure</h2>
            </div>
            <button onClick={showData}>press</button>
            <Footer/>

        </div>
    )
}
export default WeatherPage;

