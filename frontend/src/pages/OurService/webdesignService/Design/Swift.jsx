import swift from "../../../../Assests/Webdesign/5.png"
const Swift  = () => {
  return (
    <div className="row p-md-5 mt-5 mx-5">
    <div className="col-md-12 col-lg-6 mb-4 d-flex mt-5 md-mt-0 justify-content-center align-items-center">
        <img src={swift} alt="discover our story" className="img-fluid rounded-2" />
    </div>
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">Swift Loading Times</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            Quick Loading Times With our quick-loading site designs, you may experience lightning-fast performance.
     We carefully consider how fast each component should load in order to maintain user engagement and reduce bounce rates.
            </p>
        </div>
    </div>
</div>
  );
};

export default Swift ;
