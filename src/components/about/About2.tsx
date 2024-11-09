import React from "react";
import { Link } from "react-router-dom";

const About2: React.FC = () => {
  return (
    <React.Fragment>
      <div className="about-area about-two section-padding pb-50">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12 col-sm-12 wow fadeInLeft"
              data-wow-delay=".3s"
            >
              <div className="info-img">
                <img src="/assets/img/about/about.jpg" alt="" />
                <div className="founded-year">
                  <i className="flaticon-factory">Działamy od 1995 roku</i>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 wow fadeInRight"
              data-wow-delay=".3s"
            >
              <div className="about-content-area">
                <div className="section-title">
                  <h6>O nas</h6>
                  <h2>
                    Firma <b>z ponad 25-letnią </b> historią
                  </h2>
                </div>

                <p>
                Naszą misją jest dostarczanie najwyższej jakości usług, które spełniają oczekiwania nawet najbardziej wymagających klientów. Dzięki zaangażowaniu, precyzji i nowoczesnemu podejściu, jesteśmy w stanie sprostać każdemu wyzwaniu w branży budowlanej. 
                </p>
                <br />
                <ul className="about-key mt-30">
                  <li>
                    <i className="las la-check-square"></i>
                    <p>Solidność</p>
                  </li>
                  <li>
                    <i className="las la-check-square"></i>
                    <p>Precyzja</p>
                  </li>
                  <li>
                    <i className="las la-check-square"></i>
                    <p>Doświadczenie</p>
                  </li>
                  <li>
                    <i className="las la-check-square"></i>
                    <p>Zaufanie</p>
                  </li>
                </ul>
                <div className="about-contact">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="call-us d-flex mt-30">
                          <div className="icon">
                            <i className="las la-phone"></i>
                          </div>
                          <div className="mobile-number">
                            <h5>Skontaktuj się z nami</h5>
                            <p>+48 111-111-111</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About2;
