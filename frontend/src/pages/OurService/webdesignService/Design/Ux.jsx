import ux from "../../../../Assests/Webdesign/7.png"
const Ux  = () => {
  return (
    <div className="row p-md-5 mt-5 mx-5">
    <div className="col-md-12 col-lg-6 mb-4 mt-5 mt-md-0 d-flex justify-content-center align-items-center">
        <img src={ux} alt="discover our story" className="img-fluid rounded-2" />
    </div>
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">UX Design</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            Our user-friendly design for users services can transform your website into a user-oriented look. We design engaging, approachable, 
            and interactive experiences that satisfy visitors and encourage enduring client loyalty by putting the end-user first.
           </p>
        </div>
    </div>
</div>
  );
};

export default Ux ;
