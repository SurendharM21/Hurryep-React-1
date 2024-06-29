import mdu from "../../../Assests/digitalMarketing/impact.png";
const Impact  = () => {
  return (
    <div className="row p-md-5 mt-5 mx-5">
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">See the Impact</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            Our solutions are intended to provide genuine, measurable outcomes that contribute to your bottom line
            </p>
        </div>
    </div>
    <div className="col-md-12 col-lg-6 mb-4 d-flex justify-content-center align-items-center mt-md-5">
        <img src={mdu} alt="discover our story" className="img-fluid rounded-2" />
    </div>
</div>
  );
};

export default Impact ;
