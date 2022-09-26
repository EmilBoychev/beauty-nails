import { Link } from "react-router-dom"
import './Expert.css'

export const Experts = () => {
    return (
        <div className="experts slin2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage">
                            <h2>Meet Our Experts</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                                <div id="exp" className="experts_box">
                                    <div className="experts_img">
                                        <figure><img src="https://www.linkpicture.com/q/blog1.jpg" alt="#" /></figure>
                                    </div>
                                    <div className="meet">
                                        <h3>Jacob</h3>
                                        <p>Lorem ipsum dolor sit amet, iscing elit, sed do magna </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div id="exp" className="experts_box">
                                    <div className="experts_img">
                                        <figure><img src="https://www.linkpicture.com/q/blog2.jpg" alt="#" /></figure>
                                    </div>
                                    <div className="meet">
                                        <h3>Lonut</h3>
                                        <p>Lorem ipsum dolor sit amet, iscing elit, sed do magna</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div id="exp" className="experts_box">
                                    <div className="experts_img">
                                        <figure><img src="https://www.linkpicture.com/q/blog3.jpg" alt="#" /></figure>
                                    </div>
                                    <div className="meet">
                                        <h3>Irina</h3>
                                        <p>Lorem ipsum dolor sit amet, iscing elit, sed do magna</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <Link className="read_more mar_top exper" to=""> Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}