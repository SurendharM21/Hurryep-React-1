import Im from "../../Assests/Ourservice/IM.png"
const OwnerShip = () => {
    return (
        <div className="row p-md-5 mt-5 mx-5">
            <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
                <div>
                    <h6 className="text-service text-md-start">Ownership of Intellectual Property</h6>
                </div>
                <div>
                    <p className="mt-md-3 service-team">
                    All intellectual property rights, including but not limited to copyrights, trademarks, patents, and trade secrets, associated with the services provided by Hurryep Technologies, shall remain the exclusive property of Hurryep Technologies. Any materials, including software, designs, documents, and other creations, produced or developed
                 in the course of delivering services shall be owned by Hurryep Technologies unless otherwise agreed upon in writing.
                </p>
                </div>
            </div>
            <div className="col-md-12 col-lg-6 mb-4 d-flex justify-content-center align-items-center">
                <img src={Im} alt="discover our story" className="img-fluid rounded-2" />
            </div>
        </div>
    );
};

export default OwnerShip;
