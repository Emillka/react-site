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
              <img src="/assets/img/about/specjalista.jpg" alt="" />
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
              PAROL Zakład Usługowo-Remontowo-Budowlany Jerzy Parol to firma z Garwolina, która od 1995 roku realizuje szeroki zakres usług remontowo-budowlanych. Dzięki niemal 30-letniemu doświadczeniu oraz solidnej kadrze, oferujemy kompleksowe rozwiązania dostosowane do potrzeb naszych klientów.
              </p>
              <br />
            
              <div className="about-btn mt-40">
                <Link to="/o-nas" className="main-btn">
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
