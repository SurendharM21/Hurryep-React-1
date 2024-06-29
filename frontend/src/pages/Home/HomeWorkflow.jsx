import "../../pages/OurService/OurService.css";
import research from "../../Assests/Home/research.png";
import design from "../../Assests/Home/develop.png";
import development from "../../Assests/Home/deploy.png";
import deployment from "../../Assests/Home/deployment.jpg";
import maintenance from "../../Assests/Home/maintance.png";

const HomeWorkflow = () => {
  return (
    <div className="row">
      <div className="col-md-12 bg-workflow">
        <div className="p-md-5 mt-3 mt-md-1 text-center">
          <p className="text-service">Dynamic Workflow Ensemble</p>
          <h5 className="service-team">Seamlessly integrating technology and teamwork, maximizes efficiency and precision for unparalleled results</h5>
        </div>

        <div className="row p-md-5 mx-lg-5 justify-content-center justify-content-md-center">
          <div className="col-md-4 col-lg-3  col-xl-2 mx-lg-2 mb-3">
            <div className="w-100 bg-white rounded-2">
              <img src={research} alt="" className="w-100 p-3" />
              <h6 className="text-center" style={{
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "32px",
              }}>Research</h6>
            </div>
          </div>
          <div className="col-md-4 col-lg-3  col-xl-2 mx-lg-2 mb-3">
            <div className="w-100 bg-white rounded-2">
              <img src={design} alt="" className="w-100 p-3" />
              <h6 className="text-center" style={{
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "32px",
              }}>Design</h6>
            </div>
          </div>
          <div className="col-md-4 col-lg-3  col-xl-2 mx-lg-2 mb-3">
            <div className="w-100 bg-white rounded-2">
              <img src={development} alt="" className="w-100 p-3" />
              <h6 className="text-center" style={{
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "32px",
              }}>Development</h6>
            </div>
          </div>
          <div className="col-md-4 col-lg-3  col-xl-2 mx-lg-2 mb-3">
            <div className="w-100 bg-white rounded-2">
              <img src={deployment} alt="" className="w-100 p-3" />
              <h6 className="text-center" style={{
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "32px",
              }}>Deployment</h6>
            </div>
          </div>
          <div className="col-md-4 mx-lg-0 col-lg-3 col-xl-2 mx-lg-2 mb-3">
            <div className="w-100 bg-white rounded-2">
              <img src={maintenance} alt="" className="w-100 p-3" />
              <h6 className="text-center" style={{
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "32px",
              }}>Maintenance</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWorkflow;
