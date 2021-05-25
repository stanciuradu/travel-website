import React from "react";
import Logo from "../utils/Images/logo.png";
import { Link } from "react-router-dom";
import "../components/Navbar.css";

function Navbar() {
  return (
    <div className="row">
      <div className="col col-md-4">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="col col-md-4">
        <h1>Vacanța de vis</h1>
      </div>
      <div className="col col-md-4">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
              <Link to="/products" className="link">
                Produse
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
