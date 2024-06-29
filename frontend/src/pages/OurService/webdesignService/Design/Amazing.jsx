import amazing from "../../../../Assests/Webdesign/2.png"
const Amazing  = () => {
  return (
    <div className="row p-md-5 mt-5 mx-5">
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">Amazing Web Design</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            Our advanced web design services will keep you on top of the design trends. Our designs professionally integrate contemporary design trends with classic enchantment,
             ensuring that your website maintains both current as well as attractive over time.
             </p>
        </div>
    </div>
    <div className="col-md-12 col-lg-6 mb-4 d-flex justify-content-center align-items-center mt-md-5">
        <img src={amazing} alt="discover our story" className="img-fluid rounded-2" />
    </div>
</div>
  );
};

export default Amazing ;
