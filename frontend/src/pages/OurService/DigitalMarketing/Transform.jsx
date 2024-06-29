import { FaLaptopCode } from "react-icons/fa";
import "../OurService.css"
const Transform  = () => {
  return (
    <div className="row">
    <div className="col-md-12 bg-workflow">
      <div className="p-md-5 mt-3 mt-md-1 text-center">
          <div className="d-lg-flex justify-content-lg-center align-items-lg-center gap-lg-2">
          <FaLaptopCode size={40} color="#59E8FF"/>
          <h5 className="trans-head"
        >Digital Marketing Service in Madurai</h5>
          </div>
        <h5 className="p-md-5 trans-text">
        We are committed to assisting your company's success online. Our digital marketing services have the aim 
        to increase your online visibility, attract quality visitors, and convert leads into repeat customers.
        </h5>
         <button className="btn p-md-3" style={{
          borderRadius: "10px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white'
         }}>Contact Us</button>
      </div>
      </div>
      </div>
  );
};

export default Transform ;
