import Im from "../../Assests/Ourservice/Email.png"
const Payment  = () => {
  return (
    <div className="row p-md-5 mt-5 mx-5">
    <div className="col-md-12 col-lg-6 mb-4 d-flex justify-content-center align-items-center">
        <img src={Im} alt="discover our story" className="img-fluid rounded-2" />
    </div>
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">Payment Policy</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            Payment for services provided by Hurryep Technologies must be made in accordance with the terms agreed upon between Hurryep Technologies and the customer. Payment terms, including but not limited to pricing, invoicing, and payment methods, shall be communicated to the customer prior to the commencement of services. 
            Failure to adhere to the payment terms may result in the suspension or termination of services.
             </p>
        </div>
    </div>
</div>
  );
};

export default Payment ;
