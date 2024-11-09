import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-up">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <a href="/" className="logo">
                <img src="/assets/img/logo-white.png" alt="industrify-logo" />
              </a>
              <p>
                Coś napisać zachęcającego<br />
                Lorem ipsum
              </p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5>Siedziba firmy</h5>
              <p>
                Garwolin <br />
                aleja Legionów 19, 08-400 Garwolin
              </p>
              <div className="company-email">
                <a href="#">info@parol.com</a>
              </div>
              <div className="phone-number">
                <p>+48 111-111-111</p>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-6 com-sm-12">
              <h5>Przydatne linki</h5>
              <ul>
                <li>
                  <Link to="/o-nas">O nas</Link>
                  <Link to="/uslugi">Usługi</Link>
                  <Link to="/wypozyczalnia-sprzetu">Wypożyczalnia sprzętu</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h5>Skontaktuj się z nami!</h5>
              <ul>
                <li>
                  <div className="social-area">
                    <a href="#">
                      <i className="lab la-facebook-f"></i>Facebook
                    </a>
                    
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
