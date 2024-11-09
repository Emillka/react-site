import React from "react";
interface props {
  showOffcanvas: boolean;
  setShowOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
}

const OffCanvas: React.FC<props> = ({ setShowOffcanvas, showOffcanvas }) => {
  return (
    <React.Fragment>
      <div className={`extra-info ${showOffcanvas ? "active" : ""}`}>
        <div className="close-icon menu-close">
          <button onClick={() => setShowOffcanvas((p) => !p)}>
            <i className="las la-window-close"></i>
          </button>
        </div>
        <div className="logo-side mb-30">
          <a href="/" className="site-logo-2">
            <img src="/assets/img/logoparol.webp" alt="" />
          </a>
        </div>
        <div className="side-info">
          <div className="contact-list mb-40">
            <h4>O nas</h4>
            <p>
            PAROL Zakład Usługowo-Remontowo Budowlany Jerzy Parol usługi remontowo-budowlane w Garwolinie działa od 1995 roku i posiada bogatą ofertę usług remontowo-budowlanych.
            </p>
            <div className="mt-30 mb-30">
              <a href="/kontakt" className="main-btn">
              Skontaktuj się z nami!
              </a>
            </div>
          </div>
          <div className="contact-list mb-40">
            <h4>Kontakt</h4>
            <p>
              <i className="las la-rocket"></i>
              <span>
               aleja Legionów 19, 08-400 Garwolin
              </span>
            </p>
            <p>
              <i className="las la-phone"></i> <span>+48 111-111-111</span>
            </p>
            <p>
              <i className="las la-envelope-open"></i>
              <span>info@parol.com</span>
            </p>
          </div>
        </div>
      </div>

      <div className={`offcanvas-overly ${showOffcanvas ? "active" : ""}`} onClick={() => setShowOffcanvas((p) => !p)}></div>
    </React.Fragment>
  );
};

export default OffCanvas;
