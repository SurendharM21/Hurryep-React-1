import mdu from "../../../Assests/digitalMarketing/mdu.png";
const MadeMdu  = () => {
  return (
    <div className="row p-md-5 mt-5 mx-5">
    <div className="col-md-12 col-lg-6 mt-5 md-mt-0 mb-4 d-flex justify-content-center align-items-center">
        <img src={mdu} alt="discover our story" className="img-fluid rounded-2" />
    </div>
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">Made for Madurai</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            We understand the specific requirements  of local companies in Madurai and develop strategies that appeal directly to your target audience.
           </p>
        </div>
    </div>
</div>
  );
};

export default MadeMdu ;
