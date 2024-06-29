import "./Home.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import simple from "../../Assests/Home/simple.png";
import parvathi from "../../Assests/Home/parvathi.png";
import Ads from "../../Assests/Home/Ads.png";
import mrm from "../../Assests/Home/MRM.png";
import s2 from "../../Assests/Home/s2.png";
import rr from "../../Assests/Home/rr.png";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const testimonialsContent = [
        [
            {
                imgSrc: simple,
                company: "The Simple Works",
                text: "I decided to go with Hurryep because of the glowing recommendations I received from colleagues. It's clear professionalism."
            },
            {
                imgSrc: parvathi,
                company: "Parvathi Tradings",
                text: "I chose Hurryep for our website redesign because of their reputation for creating visually stunning and innovative."
            },
            {
                imgSrc: Ads,
                company: "Ads HandCrafts",
                text: "Working with Hurryep on our web development project was great from planning to implementation. The end result was a powerful."
            }
        ],
        [
            {
                imgSrc: mrm,
                company: "MRM Trading",
                text: "I chose Hurryep for our website redesign because of their reputation for creating visually stunning and innovative."
            },
            {
                imgSrc: s2,
                company: "S2 Tiles & Ceremics",
                text: "The team at Hurryep consistently impressed us with their professionalism and dedication."
            },
            {
                imgSrc: rr,
                company: "Bright Future Group Trust",
                text: "Hurryep's expertise in developing websites and software is evident in the seamless functionality."
            }
        ]
    ];

    return (
        <div className="row mt-3">
            <div className="col-md-12 bg-Test p-5">
                <div className="container-fluid">
                    <div className="p-md-5 text-md-center text-center">
                        <h5 className="section-subtitle">TESTIMONIALS</h5>
                        <h5 className="section-title">Clients Speak: Their Experience with Us</h5>
                    </div>
                    <Slider {...settings}>
                        {testimonialsContent.map((slide, slideIndex) => (
                            <div key={slideIndex}>
                                <div className="row p-md-5 p-3 mx-md-5 justify-content-center">
                                    {slide.map((testimonial, testimonialIndex) => (
                                        <div key={testimonialIndex} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4">
                                            <div className="testimonial-card">
                                                <div className="d-flex">
                                                    <img src={testimonial.imgSrc} alt={testimonial.company} className="testimonial-img"/>
                                                    <div className="text-start mt-2">
                                                        <h5 className="testimonial-company">{testimonial.company}</h5>
                                                        <div className="testimonial-stars">
                                                            <FaStar color="yellow" size={20}/>
                                                            <FaStar color="yellow" size={20}/>
                                                            <FaStar color="yellow" size={20}/>
                                                            <FaStar color="yellow" size={20}/>
                                                            <FaStar color="yellow" size={20}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-start py-3 testimonial-text">
                                                    {testimonial.text}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
