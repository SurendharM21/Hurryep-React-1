import Im from "../../Assests/Ourservice/IM.png"
const PrivacyPolicy  = () => {
  return (
    <div className="row p-md-5 mt-5 mx-5">
            <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
                <div>
                    <h6 className="text-service text-md-start">Privacy Policy</h6>
                </div>
                <div>
                    <p className="mt-md-3 service-team">
                    At Hurryep Technologies, safeguarding the privacy of our customers' personal information is of utmost importance. We collect only essential data necessary for delivering our services and ensure its secure storage and use solely for enhancing our services and communicating with our customers. We do not disclose or sell any personal information to third parties without explicit consent from our customers. 
                    By utilizing our services, customers implicitly agree to our Privacy Policy. 
                    </p>
                </div>
            </div>
            <div className="col-md-12 col-lg-6 mb-4 d-flex justify-content-center align-items-center">
                <img src={Im} alt="discover our story" className="img-fluid rounded-2" />
            </div>
        </div>
  );
};

export default PrivacyPolicy ;
