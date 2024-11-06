import React from "react";
import { Link } from "react-router-dom";

const About1: React.FC = () => {
  return (
    <div className="about-area section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-12 col-sm-12 wow fadeInRight"
            data-wow-delay=".6s"
          >
            <div className="about-img">
              <img src="/assets/img/about/about.png" alt="" />
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12 wow fadeInLeft"
            data-wow-delay=".2s"
          >
            <div className="info-content-area">
              <div className="section-title">
                <h6>O firmie</h6>
                <h2> Kilka słów o nas</h2>
              </div>
              <p className="highlight">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              </p>
              <br />
            
              <div className="about-btn mt-40">
                <Link to="/about" className="main-btn">
                  Więcej
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
