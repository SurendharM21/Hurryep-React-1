import Im from "../../Assests/Ourservice/Email.png"
const Cancel  = () => {
  return (
    <div className="row p-md-5 mt-5 mx-5">
    <div className="col-md-12 col-lg-6 mb-4 d-flex justify-content-center align-items-center">
        <img src={Im} alt="discover our story" className="img-fluid rounded-2" />
    </div>
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">Cancellation & Refund Policies</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            Hurryep Technologies operates on a strict no-refund and no-cancellation policy. Once a customer has made a purchase or availed of our services, they are not entitled to refunds or cancellations. This policy is applicable to all our services, including web development, app development, digital marketing, business development collaborations, online and offline classes, workshops, and webinars. 
            We advise our customers to thoroughly evaluate their purchases before initiating any transactions.
             </p>
        </div>
    </div>
</div>
  );
};

export default Cancel ;
