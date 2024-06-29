import App from "../../pages/OurService/AppDevelopment.jsx"
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
const AppDevelopment = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 img">
          <div className="p-5 text-md-start mt-5 text-white" style={{
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "32px",
            font: "Poppins"
          }}>
            <h5>Home / AppDevelopment</h5>
          </div>
        </div>
      </div>
      <div className="animate__animated animate__fadeInDownBig">
      <App />
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

export default AppDevelopment;
