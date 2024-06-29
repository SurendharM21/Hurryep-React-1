import mdu from "../../../Assests/digitalMarketing/success.png";
const Passionate  = () => {
  return (
    <div className="row p-md-5 mt-5 mx-5">
    <div className="col-md-12 col-lg-6 mt-5 md-mt-0 mb-4 d-flex justify-content-center align-items-center">
        <img src={mdu} alt="discover our story" className="img-fluid rounded-2" />
    </div>
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">Passionate About Your Success</h6>
        </div>
        <div>
             <p className="mt-md-3 service-team">
             We're not just performing a job; we're passionate about assisting your business in the digital age.
            </p>
        </div>
    </div>
</div>
  );
};

export default Passionate ;
