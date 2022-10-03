import { useState } from "react"
import { Link } from "react-router-dom"
import './Banner.css'
import { BanerSlider } from "./BanerSlider/BanerSlider"
import { BanerSlider1 } from "./BanerSlider/BanerSlider1"
import { BanerSlider2 } from "./BanerSlider/BanerSlider2"

export const Banner = () => {
    const [slide, setSlide] = useState(0);

    const nextButtonHandler = () => {
        setSlide(state => Number(state) + 1);
        if (slide >= 2) {
            setSlide(state => state = 2)
        }

        console.log(slide);
    }
    const prevButtonHandler = () => {
        setSlide(state => Number(state) - 1);
        if (slide <= 0) {
            setSlide(state => state = 0);
        }

        console.log(slide);
    }

    return (
        <section className="banner_main">
            <div id="myCarousel" className="carousel slide banner1" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to={0} className="active" />
                    <li data-target="#myCarousel" data-slide-to={1} />
                    <li data-target="#myCarousel" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    {/* <BanerSlider /> */}
                    {slide === 0 && <BanerSlider />}
                    {slide === 1 && <BanerSlider1 />}
                    {slide === 2 && <BanerSlider2 />}

                    <Link className="carousel-control-prev" to="" onClick={prevButtonHandler} role="button" data-slide="prev">
                        <i className="fa fa-long-arrow-left" aria-hidden="true" />
                        <span className="sr-only" >Previous</span>
                    </Link>
                    <Link className="carousel-control-next" to="" onClick={nextButtonHandler} role="button" data-slide="next">
                        <i className="fa fa-long-arrow-right" aria-hidden="true" />
                        <span className="sr-only" >Next</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}