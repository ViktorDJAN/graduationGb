import axios from "axios";
import "../styles/Registration.css";
import "../styles/ContactUs.css";
import "../styles/WeatherService.css";



const WeatherService = () => {
    /**
     *   Remote API we use  http://api.weatherapi.com/v1/current.json?key=fe0fc1a2703a4407b00200425251201&q=Moscow&aqi=no
     */
    const requestConfigs = {
        key: "fe0fc1a2703a4407b00200425251201",
        query: "",
        aqi: "no",
    }

    async function getApi(configParams) {
       try{
           return await axios.get('http://api.weatherapi.com/v1/current.json', {params: configParams});
       }catch(error){
            alert("City is not found");
           console.log(error)
       }
    }

    async function showData() {
        const inputFieldEl = document.getElementById("city_name_input");
        if(inputFieldEl.value<=0) {
            alert("Please enter city name");
        }
        requestConfigs.query = inputFieldEl.value;
        const gottenObj = await getApi(requestConfigs); // getting asynchronously json from remote api and assign it to the variable
        console.log(gottenObj)

        inputFieldEl.value = ""; // make it empty
        const h1_el_city_name_field = document.getElementById("city_name_h1");
        const h2_el_country_field = document.getElementById("country_h2");
        const h2_el_local_time_field = document.getElementById("localtime_h2");
        const h2_el_temperature_field = document.getElementById("temperature_h2");
        const h2_el_pressure_field = document.getElementById("pressure_h2");
        h1_el_city_name_field.innerHTML = "City_name: "+ gottenObj.data.location.name;
        h2_el_country_field.innerHTML = "Country: "+ gottenObj.data.location.country;
        h2_el_local_time_field.innerHTML = "Localtime: "+ gottenObj.data.location.localtime;
        h2_el_temperature_field.innerHTML = "Temperature: "+ gottenObj.data.current.temp_c;
        h2_el_pressure_field.innerHTML = "Pressure: "+ gottenObj.data.current.pressure_mb + " mm";
    }
    return (
        <div className={"weather_section_container"}>
            <h1 className={"heading_type1"}>Weather service</h1>
            <div className="city_input">
                <div>
                    <p className={"p_text_row"}>Write a city name to know weather</p>
                </div>
                <input className={"ordinary_input"} id={"city_name_input"} type="text"/>
            </div>
            <div className="city_data_block">
                <h2 className="city_info_field_h2" id={"city_name_h1"}>City_name: </h2>
                <h2 className="city_info_field_h2" id={"country_h2"}>Country: </h2>
                <h2 className="city_info_field_h2" id={"localtime_h2"}>Localtime: </h2>
                <h2 className="city_info_field_h2" id={"temperature_h2"}>Temperature:</h2>
                <h2 className="city_info_field_h2" id={"pressure_h2"}>Pressure: </h2>
            </div>
            <button className={"send_button"} onClick={showData}>ok</button>
        </div>
    )
}

export default WeatherService;