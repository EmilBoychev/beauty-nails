import { Link } from "react-router-dom"
import './About.css'

export const About = () => {
    return (
        <div className="about slin2">
            <div className="container">
                <div className="row d_flex">
                    <div className="col-md-6">
                        <div className="titlepage">
                            <h2>About Us</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation
                            </p>
                            <Link className="read_more" to="#">
                                {" "}
                                Read More
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about_img">
                            <figure>
                                <img src="https://www.linkpicture.com/q/about.png" alt="#" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}