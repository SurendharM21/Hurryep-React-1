import Transform from "./Transform";
import "../OurService.css"
import MadeMdu from "./MadeMdu";
import ProTeam from "./ProTeam";
import Passionate from "./Passionate";
import Impact from "./Impact";
import Communication from "./Communication";
import SearchOptimization from "./SearchOptimization";
import SearchMarketing from "./SearchMarketing";
import Social from "./Social";
import Email from "./Email";
import InternetMarketing from "./InternetMarketing";
import FAQ from "./FAQ";
import Contact from "../../../Components/Contact/Contact";
import Footer from "../../../Components/Footer/Footer"

const Digital = () => {
    return (
        <div className="container-fluid">
            <div className="row img p-3 p-md-5 d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-6 text-white p-4 d-flex flex-column justify-content-start align-items-start p-md-5">
                    <p className="text-web">
                        Ready to Dominate Online? Let's Boost Your Business Visibility! Want to Know How?
                    </p>
                    <div className="mt-3">
                        <button className="btn custom-btn" style={{ borderRadius: "50px", color: "#70BF29", borderColor: "#70BF29", border: "4px solid" }}>
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center">
                    <div className="bg-white rounded-4  p-md-2 box-shadow text-center" style={{ width: "100%", maxWidth: "400px" }}>
                        <h6 className="text-box">
                            Get In Touch
                        </h6>
                        <div className="mt-3">
                            <div className="input mb-3">
                                <h5 className="text-start" style={{ fontWeight: "500", fontSize: "16px", lineHeight: "24px" }}>
                                    Your Name
                                </h5>
                                <input name="name" type="name" placeholder="Enter Your Name" className="form-control p-2 rounded-2 mt-1" />
                            </div>
                            <div className="input mb-3">
                                <h5 className="text-start" style={{ fontWeight: "500", fontSize: "16px", lineHeight: "24px" }}>
                                    Phone Number
                                </h5>
                                <input name="number" type="number" placeholder="Enter Your Number" className="form-control p-2 rounded-2 mt-1" />
                            </div>
                            <div className="input mb-3">
                                <h5 className="text-start" style={{ fontWeight: "500", fontSize: "16px", lineHeight: "24px" }}>
                                    Write your message here
                                </h5>
                                <textarea name="message" placeholder="Enter Your Message" className="form-control text-area rounded-2 mt-1" rows="4" style={{ backgroundColor: "#E1FDC9", color: "#999999" }}></textarea>
                            </div>
                            <div className="text-center">
                                <button className="btn" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white', padding: "4px 24px" }}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <Transform />
            </div>
            <div className="mt-5 col-md-12 text-center trans-head">
                <h5>Why Should You Choose Our Internet Marketing Services?</h5>
            </div>
            <div className="mt-5 mt-md-2">
                <MadeMdu />
            </div>
            <div className="mt-5">
                <ProTeam />
            </div>
            <div className="mt-5">
                <Passionate />
            </div>
            <div className="mt-5">
                <Impact />
            </div>
            <div className="mt-5">
                <Communication />
            </div>
            <div className="mt-5 col-md-12 text-center trans-head">
                <h5>Our Digital Marketing Specialty Services</h5>
            </div>
            <div className="mt-5">
                <SearchOptimization />
            </div>
            <div className="mt-5">
                <SearchMarketing />
            </div>
            <div className="mt-5">
                <Social />
            </div>
            <div className="mt-5">
                <Email />
            </div>
            <div className="mt-5">
                <InternetMarketing />
            </div>
            <div className="mt-5">
                <FAQ />
            </div>
            <div className="mt-5">
                <Contact />
            </div>
            <div className="mt-5">
                <Footer />
            </div>
        </div>
    );
};

export default Digital;
