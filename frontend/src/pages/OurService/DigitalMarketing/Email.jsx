import mdu from "../../../Assests/digitalMarketing/email.png";
const Email  = () => {
  return (
    <div className="row p-md-5 mt-5 mx-5">
    <div className="col-md-12 col-lg-6 mt-5 md-mt-0 mb-4 d-flex justify-content-center align-items-center">
        <img src={mdu} alt="discover our story" className="img-fluid rounded-2" />
    </div>
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">Email Marketing</h6>
        </div>
        <div>
             <p className="mt-md-3 service-team">
             Our email marketing solutions are intended to nurture prospects and increase client loyalty. We design tailored email campaigns that provide useful information, promote your products or services, and increase conversions.
        </p>
        </div>
    </div>
</div>
  );
};

export default Email ;
