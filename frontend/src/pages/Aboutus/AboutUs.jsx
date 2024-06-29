import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import AboutDiscover from "./AboutDiscover";
import OurMission from "./OurMission";
import OurTeam from "./OurTeam";
const AboutUs  = () => {
  return (
    <div className="container-fluid">
        <div className="row">
      <div className="col-12 img">
         <div className="p-5 text-md-start mt-5 text-white" style={{
          fontWeight: "500",
          fontSize: "18px",
          lineHeight: "32px",
          font:"Poppins"
         }}>
          <h5>Home / About Us</h5>
         </div>
      </div>
    </div>
    <div className="mt-5 animate__animated animate__fadeInDownBig">
        <AboutDiscover/>
    </div>
    <div className="mt-5">
        <OurMission/>
    </div>
    <div className="mt-5">
        <OurTeam/>
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

export default AboutUs ;
