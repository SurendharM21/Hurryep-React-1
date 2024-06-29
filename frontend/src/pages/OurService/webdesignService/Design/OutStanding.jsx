import out from "../../../../Assests/Webdesign/4.png"
const OutStanding  = () => {
  return (
    <div className="row p-md-5 mt-5 mx-5">
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">Outstanding Content</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            Improve your web visibility by producing top-notch content. Our skilled content producers create interesting, timely, 
            and educational content that connects with your audience and encourages more engagement and brand loyalty.
             </p>
        </div>
    </div>
    <div className="col-md-12 col-lg-6 mb-4 d-flex justify-content-center align-items-center mt-md-5">
        <img src={out} alt="discover our story" className="img-fluid rounded-2" />
    </div>
</div>
  );
};

export default OutStanding ;
