import "../styles/PageSection.css";



const PageSection1 = () => {
    return (


    <div className={"page_section_container"}>
            <header className="header">
                <div className="logo_and_name">
                    <img className={"header_logo"} src="/src/assets/logoApp.png" alt="header_logo"/>
                    <p className={"title_header"}>V-Chat</p>
                </div>
                <nav className={"header_nav"}>
                    <ul className={"header_ul"}>
                        <li className={"li_Link"}><a className={"line"} href="/home">Home</a></li>
                        <li className={"li_Link"}><a className={"line"} href="#">Work</a></li>
                        <li className={"li_Link"}><a className={"line"} href="/services">Services</a></li>
                        <li className={"li_Link"}><a className={"line"} href="#">Contact</a></li>
                    </ul>
                </nav>
                <div className="phone_block">
                    <img id={"header_icon_phone"} src="/src/assets/phone-call.png" alt=""/>
                    <p className={"phone_number"}>+7 888 999 9999</p>
                </div>
                <div>
                    {/*todo  add  logics*/}

                    <button className={"line button_header"}>
                        <a className={"line"} href="/registration">SIGN UP</a>
                    </button>
                </div>
            </header>
            <div className="pg_section_cell">
                <div className="pg_section_left">
                    <h2 className={"pg1_title"}>We connect</h2>
                    <h2 className={"pg_section_h2"}> people, services and companies</h2>
                    <p className={"pg_section_p2"}>
                        V-Chat is the social network for IT-workers.The main goal is to connect people, services and
                        companies by creating simple and convenient communication tools.
                    </p>
                </div>
                <div className="pg_section_right">
                    {/*<img id={"pg1_section_img1"} src="/src/assets/pg1_logo.jpg" alt="pg_section_logo.jpg"*/}
                    {/*     className="logo"/>*/}
                </div>

            </div>
            <div className="pg_section_lower">
                <h2 className={"pg1_title2"}>Our Achievements</h2>
                <div className={"pg_achievements_grid"}>

                    <div>
                        <h1 className={"h1_achieve"}>10M</h1>
                        <p className={"pg_section_p2"}>monthly active users
                        </p>
                    </div>
                    <div>
                        <h1 className={"h1_achieve"}>100M</h1>
                        <p className={"pg_section_p2"}>messages daily
                        </p>
                    </div>
                    <div>
                        <h1 className={"h1_achieve"}>10M</h1>
                        <p className={"pg_section_p2"}>posts daily
                        </p>
                    </div>
                    <div>
                        <h1 className={"h1_achieve"}>2</h1>
                        <p className={"pg_section_p2"}>language versions
                        </p>
                    </div>

                </div>
            </div>


        </div>
    )
}
export default PageSection1;