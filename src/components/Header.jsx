import "../styles/Header.css";


function Header() {

    return (
        <div className="header_container">
            <div className="headerUpperPart">
                <div className="section_upper_header">
                    <img id="header_upper_icon" src="/src/assets/clock.png" alt="clock_sign"/>
                    <p className="sectionName">Monday - Friday 8AM - 9PM</p>
                </div>
                <div className="section_upper_header">
                    <img id="header_upper_icon" src="/src/assets/location.png" alt="location_sign"/>
                    <p className="sectionName">725 Park Ave, New York</p>
                </div>
                <div className="section_upper_header">
                    <img id="header_upper_icon_type2" src="/src/assets/instagram_icon1.png" alt="clock_sign"/>
                    <img id="header_upper_icon_type2" src="/src/assets/facebook_icon2.png" alt="clock_sign"/>
                    <img id="header_upper_icon_type2" src="/src/assets/twitter_icon3.png" alt="clock_sign"/>
                    <img id="header_upper_icon_type2" src="/src/assets/linkedin_icon4.png" alt="clock_sign"/>
                </div>
            </div>

        </div>

    )
}

export default Header;