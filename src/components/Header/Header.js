import { NavLink } from "react-router-dom";
import './Header.css'


export const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                            <div className="full">
                                <div className="center-desk">
                                    <div className="logo">
                                        <NavLink to="#">
                                            <img src="images/logo.png" alt="#" />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-9 col-sm-9">
                            <nav className="navigation navbar navbar-expand-md navbar-dark ">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarsExample04"
                                    aria-controls="navbarsExample04"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarsExample04">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item ">
                                            <NavLink className="nav-NavLink" to="#">
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className="nav-item active">
                                            <NavLink className="nav-NavLink" to="#">
                                                About
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-NavLink" to="#">
                                                What we do
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-NavLink" to="#">
                                                Pricing
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-NavLink" to="#">
                                                Contact Us
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-md-2">
                            <ul className="social_icon">
                                <li>
                                    <NavLink to="#">
                                        <i className="fa fa-facebook" aria-hidden="true" />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">
                                        <i className="fa fa-twitter" aria-hidden="true" />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">
                                        <i className="fa fa-NavLinkedin" aria-hidden="true" />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">
                                        <i className="fa fa-instagram" aria-hidden="true" />
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}