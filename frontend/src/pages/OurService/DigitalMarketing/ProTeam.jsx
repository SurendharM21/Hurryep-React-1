import mdu from "../../../Assests/digitalMarketing/pro.png";
const ProTeam  = () => {
  return (
    <div className="row p-md-5 mt-5 mx-5">
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">Pro Team, Pro Results</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            Our experienced team of digital specialists is ready to help you every step of the way, assuring the best results.
            </p>
        </div>
    </div>
    <div className="col-md-12 col-lg-6 mb-4 d-flex justify-content-center align-items-center mt-md-5">
        <img src={mdu} alt="discover our story" className="img-fluid rounded-2" />
    </div>
</div>
  );
};

export default ProTeam ;
