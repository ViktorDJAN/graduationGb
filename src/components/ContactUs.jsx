import "../styles/ContactUs.css";


const ContactUs = () => {
    return (
        <div className={"contact_us_container"}>
            <div className="contact_us_cell">
                <div className="left_part">
                    <div className="subtitle">
                        <p id={"process_p"}>process</p>
                        <h1 className={"h1_row_text"}>It is easy to contact us</h1>
                        <p id={"text_p"}>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
                            approaches to corporate strategy foster collaborative.</p>
                    </div>
                    <div className="actionsStages">
                        <div className="action">
                            <div className="action_img action_1">
                                <img id={"action_icon1"} src="/src/assets/phone-call.png" alt="phone_call_sign"/>
                            </div>
                            <div className={"actionGroup"}>
                                <h3 className="actionTitle">Call Today</h3>
                                <p className={"text_row_p"}>+1 800 100 900</p>
                            </div>
                        </div>
                        <div className="action">
                            <div className="action_img action_2">
                                <img id={"action_icon2"} src="/src/assets/clock.png" alt="phone_call_sign"/>
                            </div>
                            <div className={"actionGroup"}>
                                <h3 className="actionTitle">Monday To Friday</h3>
                                <p className={"text_row_p"}>9AM - 5PM</p>
                            </div>
                        </div>
                        <div className="action">
                            <div className="action_img action_3">
                                <img id={"action_icon3"} src="/src/assets/location.png" alt="phone_call_sign"/>
                            </div>
                            <div className={"actionGroup"}>
                                <h3 className="actionTitle">USA Office</h3>
                                <p className={"text_row_p"}>195 Devonshire St Boston, MA 02110
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="right_part">
                    <form action="#">
                        <div className="input_fields_row1">
                            <div className="field_input">
                                <p className={"text_row_p"}>Full Name</p>
                                <input className={"ordinary_input"} type="text"/>
                            </div>
                            <div className="field_input">
                                <p className={"text_row_p"}>Email</p>
                                <input className={"ordinary_input"} type="text"/>
                            </div>
                        </div>
                        <div className="input_fields_row1">
                            <div className="field_input">
                                <p className={"text_row_p"}>Phone</p>
                                <input className={"ordinary_input"} type="text"/>
                            </div>
                            <div className="field_input">
                                <p className={"text_row_p"}>Company(optional)</p>
                                <input className={"ordinary_input"} type="text"/>
                            </div>
                        </div>
                        <div className="input_fields_row3">
                            <div className="field_input_large">
                                <p className={"text_row_p"}>Message</p>
                                <textarea className={"large_input_field"} name="Text1" cols="40" rows="5"></textarea>
                            </div>
                        </div>
                        <div className={"button_send"}>
                            <button className={"send_button"}>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ContactUs