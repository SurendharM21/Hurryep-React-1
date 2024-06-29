import "./About.css";
import Mission from "../../Assests/Abouts/About2.png"
import vector from "../../Assests/Abouts/vector.png"
import pic from "../../Assests/Abouts/pic1.png"
import sec from "../../Assests/Abouts/sec.png"
import third from "../../Assests/Abouts/third.png"
const OurMission = () => {
    return (
        <div className="row">
            <div className="col-md-12 bg-workflow">

                <div className="p-md-5 mt-3 mt-md-1 text-center">
                    <p className="description">Defining Our Purpose: Mission, Vision, and Values</p>
                    <div className="d-md-flex text-center justify-content-md-center gap-md-3 mt-5">
                        <div className="">
                            <img src={pic} alt="vector" className="img-fluid w-100 h-100 mt-1 p-1" />
                        </div>
                        <div className="">
                            <img src={sec} alt="vector" className="img-fluid w-100 h-100 mt-1 p-1" />
                        </div>
                        <div className="">
                            <img src={third} alt="vector" className="img-fluid w-100 h-100 mt-1 p-1" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row p-md-5">
                        <div className="col-md-12 col-lg-6 mt-4 mt-md-0 p-lg-5 d-flex align-items-center justify-content-center">
                            <img src={Mission} alt="mission" className="img-fluid rounded-3 mission-img" />
                        </div>
                        <div className="col-md-12 col-lg-6 mt-lg-5 mt-md-2 p-lg-5 p-2 text-start d-flex align-items-center justify-content-center">
                            <p className="para">
                                At Hurryep Technologies, we pride ourselves on our expertise in digital marketing, social media handling, website development, app development, SEO services, competitor analysis, UI/UX design, business strategy, and ads campaigns. With years of industry experience,
                                our dedicated team is committed to providing innovative solutions tailored to meet your specific goals and objectives.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMission;
