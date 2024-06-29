import { Outlet } from "react-router-dom";
import NavbarComponent from "./Navbar";

const RootLayout  = () => {
  return (
    <div className="">
     <NavbarComponent/>
     <Outlet/>
    </div>
  );
};

export default RootLayout ;
