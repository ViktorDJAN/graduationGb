import "../styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer_container">

            <div className={"footer_lower"}>
                <div className="footer_group">
                    <div>
                        <p className="footer_text">For any questions, please contact us:</p>
                    </div>
                    <div>
                        <a href="#" className="our_link">
                            our_company@gmail.com
                        </a>
                    </div>
                </div>


                <p className="footer_text">© 2018-2025. All right reserved.</p>
            </div>

        </div>

    )
}
export default Footer;