// import { Link } from "react-router-dom";
import { Link } from "react-scroll"
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
                                        <Link to="/">
                                            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-e4DPJDo582lTB4SjN2ElKNUyWx6PzwoPw&usqp=CAU" alt="#" /> */}
                                            <img src="https://www.linkpicture.com/q/eva-eliza-white.jpg" alt="#" />
                                        </Link>
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
                                <nav>

                                </nav>
                                <div className="collapse navbar-collapse" id="navbarsExample04">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item ">
                                            <Link className="nav-NavLink" to="home">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="nav-item active">
                                            <Link className="nav-NavLink" to="about" >
                                                About
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-NavLink" to="we_do">
                                                What we do
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-NavLink" to="pricing">
                                                Pricing
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-NavLink page-scroll" to="contact">
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-md-2">
                            <ul className="social_icon">
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-facebook" aria-hidden="true" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-twitter" aria-hidden="true" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-NavLinkedin" aria-hidden="true" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-instagram" aria-hidden="true" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}