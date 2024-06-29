import one from "../../../Assests/digitalMarketing/one.jpg";
import second from "../../../Assests/digitalMarketing/two.jpg";
import third from "../../../Assests/digitalMarketing/third.jpg";
import four from "../../../Assests/digitalMarketing/four.jpg";
const InternetMarketing  = () => {
  return (
    <div className="container-fluid">
    <div className="row bg-workflow p-md-5 text-center">
      <div className="col-12 mt-3 mt-md-1">
        <h5 className="tailored-title">Benefits of Internet marketing Service</h5>
      </div>
      <div className="row justify-content-center mt-5 p-md-5">
        <div className=" col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="service-card text-center d-flex flex-column align-items-center p-md-3 h-100">
            <img src={one} alt="Business Websites" className="img-fluid w-100 h-100 mb-3" />
            <h6 className="service-title" style={{ color: "#70BF29" }}>High Traffic</h6>
            <p className="card-para mt-3">SEO and SEM are digital marketing strategies that bring large amounts of targeted traffic to your website, improving the the likelihood of visitors becoming customers</p>
          </div>
        </div>

        <div className=" col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="service-card text-center d-flex flex-column align-items-center p-3 h-100">
            <img src={second} alt="E-commerce Websites" className="img-fluid w-100 h-100 mb-3" />
            <h6 className="service-title" style={{ color: "#70BF29" }}>Target Leads</h6>
            <p className="card-para mt-3">Our digital marketing services are designed to attract and engage your target consumers, ensuring that your marketing efforts reach the intended demographic</p>
          </div>
        </div>

        <div className=" col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="service-card text-center d-flex flex-column align-items-center p-3 h-100">
            <img src={third} alt="Portfolio Websites" className="img-fluid w-100 h-100 mb-3" />
            <h6 className="service-title" style={{ color: "#70BF29" }}>ROI(return on Investment)</h6>
            <p className="card-para mt-3">We aim to maximize your return on investment by producing measurable results that
 improve the bottom line of your
 company through a focused and data-driven strategy</p>
          </div>
        </div>

        <div className=" col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="service-card text-center d-flex flex-column align-items-center p-3 h-100">
            <img src={four} alt="Educational Websites" className="img-fluid w-100 h-100 mb-3" />
            <h6 className="service-title" style={{ color: "#70BF29" }}>Long Term Growth</h6>
            <p className="card-para mt-3">Digital marketing enables you
 to have a strong online presence that promotes long-term success. Our initiatives are intended to provide long-term advantages, allowing your organization to prosper.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default InternetMarketing ;
