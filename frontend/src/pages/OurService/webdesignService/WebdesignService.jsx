import Footer from "../../../Components/Footer/Footer";
import "../OurService.css";
import Amazing from "./Design/Amazing";
import CMS from "./Design/CMS";
import MobileResponsive from "./Design/MobileResponsive";
import Navigation from "./Design/Navigation";
import Optimized from "./Design/Optimized";
import OutStanding from "./Design/OutStanding";
import Swift from "./Design/Swift";
import Unique from "./Design/Unique";
import Ux from "./Design/Ux";
import FAQ from "./FAQ";
import Tailored from "./Tailored";
import Transform from "./Transform";
import Contact from "../../../Components/Contact/Contact.jsx"

const WebdesignService = () => {
  return (
    <div className="container-fluid">
      <div className="row img p-3 p-md-5 d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-6 text-white p-4 d-flex flex-column justify-content-start align-items-start p-md-5">
          <h5 className="text-webdesign text-start">
            Elevate Your Online Presence
          </h5>
          <p className="text-web">
            Hurryep Technologies Website Design and Development Service in Madurai. We welcome you to Hurryep Technologies, the blend of simplicity and style in website design and development.
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
                <h5 className="text-start" style={{ fontWeight: "500", fontSize: "16px", lineHeight: "24px"}}>
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
                <h5 className="text-start" style={{ fontWeight: "500", fontSize: "16px", lineHeight: "24px"}}>
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
          <Transform/>
      </div>
      <div className="mt-5">
          <Unique/>
      </div>
      <div className="mt-5">
          <Amazing/>
      </div>
      <div className="mt-5">
          <Navigation/>
      </div>
      <div className="mt-5">
          <OutStanding/>
      </div >
      <div className="mt-5">
          <Swift/>
      </div>
      <div className="mt-5">
          <Optimized/>
      </div>
      <div className="mt-5">
         <Ux/>
      </div>
      <div className="mt-5">
         <MobileResponsive/>
      </div>
      <div className="mt-5">
         <CMS/>
      </div>
      <div className="mt-5">
         <Tailored/>
      </div>
      <div className="mt-5">
         <FAQ/>
      </div>
      <div className="mt-5">
         <Contact/>
      </div>
      <div className="mt-5">
         <Footer/>
      </div>
    </div>
  );
};

export default WebdesignService;
