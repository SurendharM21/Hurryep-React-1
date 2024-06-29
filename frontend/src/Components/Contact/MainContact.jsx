import Footer from "../Footer/Footer";
import Contact from "./Contact";

const MainContact  = () => {
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
      <h5>Home / Contact Us</h5>
     </div>
  </div>
</div>
<div className="mt-5 mt-md-0">
  <Contact/>
</div>
<div className="mt-5 mt-md-0">
  <Footer/>
</div>
</div>
  );
};

export default MainContact ;
