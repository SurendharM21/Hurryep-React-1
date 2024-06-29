import navigation from "../../../../Assests/Webdesign/3.png"
const Navigation  = () => {
  return (
    <div className="row p-md-5 mt-5 mx-5">
    <div className="col-md-12 col-lg-6 mt-5 md-mt-0 mb-4 d-flex justify-content-center align-items-center">
        <img src={navigation} alt="discover our story" className="img-fluid rounded-2" />
    </div>
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">Simple navigation</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            With our excellent navigation design, you could experience top-notch browsing experiences. We highlight simple to utilize user-friendly interfaces that make navigating easy and pleasurable for all site visitors.
               </p>
        </div>
    </div>
</div>
  );
};

export default Navigation ;
