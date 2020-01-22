import React from "react";
import Law from "./../../pictures/law1.jpg";
import Name from "./../../pictures/name.jpg";
import "./Navbar.css";
//import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="law img-fluid" src={Law} alt="law picture" />
      {/*<img className="name-navbar img-fluid" src={Name} alt="name picture" />*/}
      <div className="law-name">
        <div className="first">
          <h2>Адвокат</h2>
        </div>
        <h1>Филип Алексић</h1>
      </div>
    </div>
  );
};

export default Navbar;
