import Cancel from "./Cancel";
import Contact from "./Contact";
import Disclaimer from "./Disclaimer";
import Form from "./Form";
import OwnerShip from "./OwnerShip";
import Payment from "./Payment";
import PrivacyPolicy from "./PrivacyPolicy";
import Shipping from "./Shipping";
import TermsAndConditions from "./TermsAndConditions";
import ContactUs from "../../Components/Contact/Contact"
import Footer from "../../Components/Footer/Footer"
import img from "../../Components/Footer/pic.png"

const LearnWithUs = () => {
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
                        <h5>Home / Learn with Us</h5>
                    </div>
                </div>

                <div className="bg-main">
                    <div className="d-flex justify-content-end align-items-end">
                        <Form />
                      
                        <h3 className="text-bg-main w-25 h-100">Learn with Us!</h3>
                    </div>
                </div>
                

                <div className="mt-5">

                    <PrivacyPolicy />
                </div>
                <div className="mt-5">
                    <Cancel />
                </div>
                <div className="mt-5">
                    <OwnerShip />
                </div>
                <div className="mt-5">
                    <Payment />
                </div>
                <div className="mt-5">
                    <Shipping />
                </div>
                <div className="mt-0">
                    <Contact />
                </div>
                <div className="mt-0">
                    <TermsAndConditions />
                </div>
                <div className="mt-0">
                    <Disclaimer />
                </div>
                <div className="mt-5">
                    <ContactUs />
                </div>
                <div className="mt-5">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default LearnWithUs;
