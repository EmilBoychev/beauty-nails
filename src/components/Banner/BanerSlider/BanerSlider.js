import { Link } from "react-router-dom"


export const BanerSlider = ({ props }) => {

    return (
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
    )
}