import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import OurTeam from "../Aboutus/OurTeam";
import AppDevelopment from "./AppDevelopment";
import BrandPromotion from "./BrandPromotion";
import BusinessAnalyst from "./BusinessAnalyst";
import BusinessCollaborations from "./BusinessCollaborations";
import BusinessDevelopment from "./BusinessDevelopment";
import DigitalMarketing from "./DigitalMarketing";
import EmailMarketing from "./EmailMarketing";
import GraphicDesign from "./GraphicDesign";
import Influence from "./Influence";
import OurTeamService from "./OurTeamService";
import SEOService from "./SEOService";
import UIUx from "./UIUx";
import WebDevelopment from "./WebDevelopment";

const OurService  = () => {
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
      <h5>Home / Our Services</h5>
     </div>
  </div>
</div>
<div className="mt-5">
<OurTeamService/>
</div>
 <div className="mt-5">
<BusinessDevelopment/>
</div>
<div className="mt-5">
<BusinessCollaborations/>
</div>
<div className="mt-5">
<WebDevelopment/>
</div>
<div className="mt-5">
<AppDevelopment/>
</div>
<div className="mt-5">
<DigitalMarketing/>
</div>
<div className="mt-5">
<BusinessAnalyst/>
</div>
<div className="mt-5">
<SEOService/>
</div>
<div className="mt-5">
<UIUx/>
</div>
<div className="mt-5">
<GraphicDesign/>
</div>
<div className="mt-5">
<Influence/>
</div>
<div className="mt-5">
<EmailMarketing/>
</div>
<div className="mt-5">
<BrandPromotion/>
</div>
<div className="mt-5">
<BusinessDevelopment/>
</div>
<div className="mt-5">
<BusinessCollaborations/>
</div>
<div className="mt-5">
<BusinessDevelopment/>
</div>
<div className="mt-5">
<BusinessCollaborations/>
</div>
<div className="mt-5">
<Contact/>
</div>
<div className="mt-5">
<Footer/>
</div>
</div>
  )
};

export default OurService ;
