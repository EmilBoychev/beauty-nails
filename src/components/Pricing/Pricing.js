import { Link } from 'react-router-dom'
import './Pricing.css'


export const Pricing = () => {
    return (
        <div className="pricing slin">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="pricing_box">
                            <div className="pricing_box_ti">
                                <h3> <span>$</span>20<strong>/one Day</strong></h3>
                            </div>
                            <div className="our_pricing">
                                <span>Regular</span>
                                <p>Lorem ipsum dolor sit amet, iscing elit, sed do magna</p>
                            </div>
                        </div>
                        <Link className="read_more mar_top" to=""> Book Now</Link>
                    </div>
                    <div className="col-md-4">
                        <div className="pricing_box">
                            <div className="pricing_box_ti">
                                <h3> <span>$</span>30<strong>/one Day</strong></h3>
                            </div>
                            <div className="our_pricing">
                                <span>Standard</span>
                                <p>Lorem ipsum dolor sit amet, iscing elit, sed do magna</p>
                            </div>
                        </div>
                        <Link className="read_more mar_top" to=""> Book Now</Link>
                    </div>
                    <div className="col-md-4">
                        <div className="pricing_box">
                            <div className="pricing_box_ti">
                                <h3> <span>$</span>40<strong>/one Day</strong></h3>
                            </div>
                            <div className="our_pricing">
                                <span>Premium</span>
                                <p>Lorem ipsum dolor sit amet, iscing elit, sed do magna</p>
                            </div>
                        </div>
                        <Link className="read_more mar_top" to=""> Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}