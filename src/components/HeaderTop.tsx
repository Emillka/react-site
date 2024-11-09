import React from "react";

const HeaderTop: React.FC = () => {
  return (
    <React.Fragment>
      <div className="header-top dark-bg">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h1>PAROL</h1>
              <p>Zakład Usługowo Remontowo Budowlany</p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 text-right">
              <div className="contact-info">
                <i className="las la-envelope"></i> mail@parol.com |
                <i className="las la-map-marker"></i> aleja Legionów 19, 08-400 Garwolin
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderTop;
