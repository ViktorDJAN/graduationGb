import "../styles/ContactUs.css";
import "../styles/Registration.css";

const Registration = () => {
    return (
        <div className={"contact_us_container"}>
            <div>
                <h1 className={"register_title"}>Welcome to our registration page</h1>
            </div>
            <div className="contact_us_cell_register">


                <div className="right_part_register">

                    <form action="#">

                        <div className="input_fields_row1_register">
                            <div className="field_input">
                                <p className={"text_row_p"}>Firstname</p>
                                <input className={"ordinary_input"} type="text"/>
                            </div>
                            <div className="field_input">
                                <p className={"text_row_p"}>Lastname</p>
                                <input className={"ordinary_input"} type="text"/>
                            </div>
                        </div>
                        <div className="input_fields_row1_register">
                            <div className="field_input">
                                <p className={"text_row_p"}>Phone</p>
                                <input className={"ordinary_input"} type="text"/>
                            </div>
                            <div className="field_input">
                                <p className={"text_row_p"}>Email</p>
                                <input className={"ordinary_input"} type="text"/>
                            </div>
                        </div>

                        <div className={"button_send"}>
                            <button className={"send_button_register"}>Sign UP</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={"home_link_div"}>
                <a className={"home_link line"} href="/home">home</a>

            </div>
        </div>
    )
}
export default Registration;