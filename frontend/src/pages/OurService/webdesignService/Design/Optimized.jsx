import optimized from "../../../../Assests/Webdesign/6.png"
const Optimized  = () => {
  return (
    <div className="row p-md-5 mt-5 mx-5">
            <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
                <div>
                    <h6 className="text-service text-md-start">Optimized for Search Engines</h6>
                </div>
                <div>
                    <p className="mt-md-3 service-team">
                    Our unique web design solutions will help you realize the full potential of your brand. Our team brings your ideas to life,
                     creating visually appealing designs that reflect your brand's personality and attract your audience.
                      </p>
                </div>
            </div>
            <div className="col-md-12 col-lg-6 mb-4 d-flex justify-content-center align-items-center mt-md-5">
                <img src={optimized} alt="discover our story" className="img-fluid rounded-2" />
            </div>
        </div>
  );
};

export default Optimized ;
