import "../styles/PageSection2.css";

const PageSection2 =  () => {


    // const getRequestConfig = {
    //         access_key: "dd014c8909b905da041180615d04b08b",
    //         query: "Moscow",
    // }
    // const res =  axios.get('http://api.weatherstack.com/current', { params: getRequestConfig});
    //
    // res.then((res) => {
    //     console.log(res.data.location.name);})


    return (
        <div className={"page_section_container"}>
            <div className="services_grid">
                <div className="cell cell_1"><a href="/weather">Weather</a></div>
                <div className="cell cell_2">Sports</div>
                <div className="cell cell_3">Currency</div>
                <div className="cell cell_4">World News</div>
                <div className="cell cell_5">Processing...</div>
                <div className="cell cell_6">Processing...</div>
                <div className="cell cell_7">Processing...</div>
                <div className="cell cell_8">Processing...</div>
                <div className="cell cell_9">Processing...</div>
            </div>
        </div>
    )
}
export default PageSection2;