import mdu from "../../../Assests/digitalMarketing/social.png";
const Social  = () => {
  return (
    <div className="row p-md-5 mt-5 mx-5">
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">Social Media Marketing</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            We manage your social media presence across sites such as Facebook, Instagram, and LinkedIn. Our SMM services assist you in connecting with your audience, increasing brand recognition, and driving engagement through interesting content and effective campaigns.
            </p>
        </div>
    </div>
    <div className="col-md-12 col-lg-6 mb-4 d-flex justify-content-center align-items-center mt-md-5">
        <img src={mdu} alt="discover our story" className="img-fluid rounded-2" />
    </div>
</div>
  );
};

export default Social ;
