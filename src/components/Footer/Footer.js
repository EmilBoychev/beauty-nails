import { Link } from "react-router-dom"
import './Footer.css'

export const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="conta">
                                <li><i className="fa fa-map-marker" aria-hidden="true" /> Passages of Lorem Ipsum available</li>
                                <li><i className="fa fa-phone" aria-hidden="true" /> Call : +012334567890</li>
                                <li> <i className="fa fa-envelope" aria-hidden="true" /><Link href="#"> demo@gmail.com</Link></li>
                            </ul>
                        </div>
                        <div className=" col-md-3 col-sm-6">
                            <h3>About </h3>
                            <p className="variat">There are many variations of passages of Lorem Ipsum available, but the majority have suffered le</p>
                        </div>
                        <div className=" col-md-3 col-sm-6">
                            <h3>Nail Salon</h3>
                            <p className="variat">There are many variations of passages of Lorem Ipsum available, but the majority have suffered le</p>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <h3>Useful Link</h3>
                            <ul className="link_menu">
                                <li><Link href="index.html">Home</Link></li>
                                <li><Link href="about.html"> About</Link></li>
                                <li><Link href="we-do.html">What we do</Link></li>
                                <li className="active"><Link href="pricing.html">Pricing</Link></li>
                                <li><Link href="contact.html">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <h3>Subscribe</h3>
                            <form className="bottom_form">
                                <Link className="right_btn" href="Javascript:void(0)"> <i className="fa fa-long-arrow-right" aria-hidden="true" /></Link>
                                <input className="enter" placeholder="Enter your email" type="text" name="Enter your email" />
                                <p>There are many variations of passages </p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <p>© 2019 All Rights Reserved. Design by  <Link href="https://html.design/"> Free Html Templates</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}