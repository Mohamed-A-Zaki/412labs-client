import React from "react";

const Contact = () => {
  return (
    <section
      className="probootstrap-section"
      id="contact"
      data-section="contact"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="../img/412labs-logo-RGB-1000.png"
              style={{ height: "50px" }}
              alt=""
            />
            <br />
            <br />
            <ul className="probootstrap-contact-details">
              <li>
                <span className="text-uppercase">Email </span>
                accvrdiploma@412labs.com
              </li>
              <li>
                <span className="text-uppercase">Phone</span>
                Please contact us via the FB page
              </li>
              <li>
                <span className="text-uppercase">Address</span>
                119 Misr-Helwan Agricultural Rd.
                <br />
                14th Floor. Unit 6<br />
                Cairo, Egypt
              </li>
            </ul>
            <div className="col-md-12 social-icons">
              <p className="probootstrap-social">
                <a href="https://www.facebook.com/412labs/">
                  <i className="fa fa-facebook-square" aria-hidden="true"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCgRKmYIQY6CzPC5EIWMqwCw">
                  <i className="fa fa-youtube-square" aria-hidden="true"></i>
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-3 col-md-push-1">
            <img src="../img/ACC-1_100.png" style={{ height: "50px" }} alt="" />
            <br />
            <br />
            <ul className="probootstrap-contact-details">
              <li>
                <span className="text-uppercase">Email </span>
                ACCairo@state.gov
              </li>
              <li>
                <span className="text-uppercase">Phone</span>
                +20 2 2797 3300
              </li>
              <li>
                <span className="text-uppercase">Address</span>
                5 Tawfik Diab Street <br />
                Garden City
                <br />
                Cairo, Egypt <br />
              </li>
            </ul>
            <div className="col-md-12 social-icons">
              <p className="probootstrap-social">
                <a href="https://www.facebook.com/USEmbassyCairo">
                  <i className="fa fa-facebook-square" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/usembassycairo">
                  <i className="fa fa-twitter-square" aria-hidden="true"></i>
                </a>
                <a href="https://www.youtube.com/USEmbassyCairoEG">
                  <i className="fa fa-youtube-square" aria-hidden="true"></i>
                </a>
                <a href="https://www.flickr.com/photos/usembassycairo">
                  <i className="fa fa-flickr" aria-hidden="true"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
