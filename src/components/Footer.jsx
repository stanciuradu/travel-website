import React from "react";
import "./Footer.css";
import Facebook from "../utils/Images/facebook.png";
import Twitter from "../utils/Images/twitter.png";
import Instagram from "../utils/Images/instagram.png";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      // initializez starea inputului
      email: "",
    };
  }
  // functie de schimbare a starii inputului de email
  handleChangeEmail(event) {
    const newEmail = event.target.value;
    this.setState({ email: newEmail });
  }

  render() {
    return (
      <div className="footer-flex-title footer">
        <h4>
          Alatură-te newslatter-ului de aventură pentru a primi cele mai bune
          oferte de vacanță
        </h4>
        <p>Te poți abona la newslatter prin intermediul adresei de email</p>
        <div className="footer-flex-formular input">
          {this.state.email.includes("@") && this.state.email.includes(".") ? (
            <p>Email completat corect</p>
          ) : (
            <p>Email incorect</p>
          )}
          <input
            className="email"
            type="email"
            placeholder="Email utilizator"
            email={this.state.email}
            onChange={(event) => this.handleChangeEmail(event)}
          />
          <input id="submit" type="submit" value="Abonează-te" />
        </div>
        <div className="footer-flex-social copy">
          <p>Vacanță de vis &copy;2021</p>
          <img src={Facebook} alt="Facebook" />
          <img src={Twitter} alt="Facebook" />
          <img src={Instagram} alt="Facebook" />
        </div>
        <div className=" footer-flex-container contact">
          <h4>Email:radu@yahoo.ro</h4>
          <h4>Spune-ne ce vacanță de vis dorești!</h4>
          <h4>Mobil:03745056123</h4>
        </div>
      </div>
    );
  }
}

export default Footer;
