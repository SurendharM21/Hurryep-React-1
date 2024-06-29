import logo from "../../Assests/Navbar/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import img from "./pic.png"

const Footer = () => {
  return (
    <div className="container-fluid bg-dark py-5">
      <div className="row justify-content-center justify-content-md-between mt-md-5">
        <div className="text-center text-md-start text-lg-center  mx-lg-0 col-md-6 col-lg-3 mb-4">
          <img src={logo} alt="logo" className="mx-auto  mb-3" style={{ width: '160px', height: 'auto' }} />
          <h6 className="text-white mx-md-3" style={{ fontWeight: "600", fontSize: "24px", lineHeight: "32px", font: "Poppins" }}>About Us</h6>
        </div>
        <div className="text-center text-md-start col-md-6 col-lg-3  mb-4">
          <h6 className="text-white" style={{ fontWeight: "600", fontSize: "24px", lineHeight: "32px", font: "Poppins" }}>Services</h6>
          <div className="text-white" style={{ fontWeight: "400", fontSize: "18px", lineHeight: "32px", font: "Poppins" }}>
          <p><Link to="/action1" style={{
              textDecoration:"none",color:"white"
            }}>Business Developement</Link>
            </p>
            <p><Link to="/action2" style={{
              textDecoration:"none",color:"white"
            }}>Business Collaboration</Link>
            </p>
            <p><Link to="/action1" style={{
              textDecoration:"none",color:"white"
            }}>Finance and Auditing</Link>
            </p>
            <p><Link to="/action1" style={{
              textDecoration:"none",color:"white"
            }}>Legal Assistance</Link>
            </p>
            <p><Link to="/action1" style={{
              textDecoration:"none",color:"white"
            }}>Branding and Auditing</Link>
            </p>
            <p><Link to="/action1" style={{
              textDecoration:"none",color:"white"
            }}>UI UX Design</Link>
            </p>
          </div>
        </div>
        <div className="text-center text-md-start col-md-6 col-lg-3  mb-4">
          <h6 className="text-white" style={{ fontWeight: "600", fontSize: "24px", lineHeight: "32px", font: "Poppins" }}>Legal</h6>
          <div className="text-white" style={{ fontWeight: "400", fontSize: "18px", lineHeight: "32px", font: "Poppins" }}>
            <p>Privacy Policy</p>
            <p>Refund Policy</p>
            <p><Link to="/terms-and-condition" style={{
              textDecoration:"none",color:"white"
            }}>Terms and Condition</Link>
            </p>
            <p><Link to="/ourService" style={{
              textDecoration:"none",color:"white"
            }}>Our Service</Link>
            </p>
            <p>Disclaimer</p>
            <img src={img}></img>
          </div>
        </div>
        <div className="text-center text-md-start col-md-6 col-lg-3 ">
          <h6 className="text-white" style={{ fontWeight: "600", fontSize: "24px", lineHeight: "32px", font: "Poppins" }}>Contact Us</h6>
          <div className="text-white" style={{ fontWeight: "400", fontSize: "18px", lineHeight: "32px", font: "Poppins" }}>
            <div className="mb-3">
              <FaPhoneAlt color="#70BF29" size={15} className="mr-2" />
              <span className="px-1">6374393936</span>
            </div>
            <div className="mb-3">
              <FaPhoneAlt color="#70BF29" size={15} className="mr-2" />
              <span className="px-1">8675651401</span>
            </div>
            <div className="mb-3">
              <BiLogoGmail color="#70BF29" size={15} className="mr-2" />
              <span className="px-1">hurryeptech@gmail.com</span>
            </div>
            <div className="mb-3">
              <IoLogoLinkedin color="#70BF29" size={15} className="mr-2" />
              <span className="px-1">Hurryep Technologies</span>
            </div>
            <div>
              <AiFillInstagram color="#70BF29" size={15} className="mr-2" />
              <span className="px-1">hurryep.tech</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
