import cms from "../../../../Assests/Webdesign/9.png"
const CMS  = () => {
  return (
    <div className="row p-md-5 mt-5 mx-5">
    <div className="col-md-12 col-lg-6 mb-4 mt-5 mt-md-0 d-flex justify-content-center align-items-center">
        <img src={cms} alt="discover our story" className="img-fluid rounded-2" />
    </div>
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">CMS Dynamic Design</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            Our dynamic CMS systems make it easy to maintain and update your content. You can easily maintain your website's relevance,
             freshness, and currentness with our adaptable content management systems.
            </p>
        </div>
    </div>
</div>
  );
};

export default CMS ;
