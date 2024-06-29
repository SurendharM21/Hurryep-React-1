import About from "../../Assests/Abouts/About1.png"
import "./About.css"
const AboutDiscover  = () => {
  return (
    <div className="row p-md-5 mt-5" style={{
    }}>
    <div className="col-md-12 col-lg-6 col-12  gap-2 ">
        <img src={About} alt="discover our story" className="rounded-2 w-100 h-100"/>
    </div>
    <div className="col-lg-6 col-12">
    <div>
            <p className="" style={{
                fontWeight:"500",
                fontSize:"18px",
                lineHeight:"32px"
            }}>DISCOVER OUR STORY</p>
        </div>
        <div>
            <h4 className="description">
             Delve into Our Origins: A Tale of Passion and Purpose</h4>
        </div>
        <div>
            <p className="mt-2 para">
          Dedicated to client success, we've grown from humble beginnings to offer a diverse range of digital services including marketing, development, design, and strategy. Fueled by innovation, we aim to build the ultimate tech platform, leveraging emerging trends and technologies. As we continue to grow, 
          our vision remains clear: to create the biggest tech platform, leveraging the latest innovations and trending technologies.
         </p>
        </div>
        <div>
            <button className="btn text-center text-md-start" style={{ borderRadius: "50px",color:"#70BF29",borderColor:"#70BF29",border:"2px solid",fontSize:"18px",fontWeight:"600" }}>Discover More</button>
        </div>
    </div>
    </div>
  );
};

export default AboutDiscover ;
