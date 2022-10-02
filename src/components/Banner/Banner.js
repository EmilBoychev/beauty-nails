import { Link } from "react-router-dom"
import './Banner.css'


export const Banner = () => {
    return (
        <section className="banner_main">
            <div id="myCarousel" className="carousel slide banner1" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to={0} className="active" />
                    <li data-target="#myCarousel" data-slide-to={1} />
                    <li data-target="#myCarousel" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container-fluid">
                            <div className="carousel-caption relative">
                                <div className="row d_flex">
                                    <div className="col-md-6">
                                        <img className="bann_img" src="https://us.123rf.com/450wm/domenicogelermo/domenicogelermo2010/domenicogelermo201000206/156606536-close-up-face-of-a-beautiful-woman-with-multicolor-nails-and-fashion-makeup-.jpg?ver=6" alt="#" />
                                        {/* <img className="bann_img" src="https://www.itakeyou.co.uk/wp-content/uploads/2020/09/dark-nails.jpg" alt="#" /> */}
                                        {/* <img className="bann_img" src="https://www.impressmanicure.com/media/wysiwyg/impress/promotions-1x3/bca-nails-launch/mobile.jpg" alt="#" /> */}
                                        {/* <img className="bann_img" src="https://www.linkpicture.com/q/banner_ing.jpg" alt="#" /> */}
                                    </div>
                                    <div className="col-md-6">
                                        <span>01/03</span>
                                        <h1>Eva nail Salon Creating Beauty</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
                                        <Link className="get_btn" to="" role="button">Get Appoinment</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container-fluid">
                            <div className="carousel-caption relative">
                                <div className="row d_flex">
                                    <div className="col-md-6">
                                        <img className="bann_img" src="https://www.linkpicture.com/q/banner_ing.jpg" alt="#" />
                                    </div>
                                    <div className="col-md-6">
                                        <span>02/03</span>
                                        <h1>Eva nail Salon Creating Beauty</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
                                        <Link className="get_btn" to="" role="button">Get Appoinment</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container-fluid">
                            <div className="carousel-caption relative">
                                <div className="row d_flex">
                                    <div className="col-md-6">
                                        <img className="bann_img" src="https://www.linkpicture.com/q/banner_ing.jpg" alt="#" />
                                    </div>
                                    <div className="col-md-6">
                                        <span>03/03</span>
                                        <h1>Eva nail Salon Creating Beauty</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p>
                                        <Link className="get_btn" to="" role="button">Get Appoinment</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link className="carousel-control-prev" to="#myCarousel" role="button" data-slide="prev">
                        <i className="fa fa-long-arrow-left" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </Link>
                    <Link className="carousel-control-next" to="#myCarousel" role="button" data-slide="next">
                        <i className="fa fa-long-arrow-right" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}