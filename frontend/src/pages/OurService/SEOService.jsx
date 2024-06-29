import SEO from "../../Assests/Ourservice/SEO.png";
const SEOService  = () => {
  return (
    <div className="row p-md-5 mt-5 mx-5">
    <div className="col-md-12 col-lg-6 mb-4 d-flex justify-content-center align-items-center">
        <img src={SEO} alt="discover our story" className="img-fluid rounded-2" />
    </div>
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">SEO Service</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            Transform your online presence with our cutting-edge SEO services tailored to your unique business needs. Our team of experts will work closely with you to develop
             customized strategies aimed at boosting your website's visibility, driving organic traffic, and maximizing conversions. 
         </p>
        </div>
        {/* <div className="d-flex justify-content-center justify-content-md-start align-items-center">
        <button className="btn text-center text-md-start" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white' }}>Discover More</button>
        </div> */}
    </div>
</div>
  );
};

export default SEOService ;
