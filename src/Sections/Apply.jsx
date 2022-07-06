import React from "react";


const Apply = () => {
  return (
    <section
      className="probootstrap-section probootstrap-cta"
      id="apply"
      data-section="apply"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <h2 className="probootstrap-heading">Ready to apply?</h2>
            <p className="probootstrap-sub-heading">
              Space is very limted for this program, so please make sure you
              read all the information on this page in detail, and apply when
              you're ready!
            </p>
            <p>
              <a
                href="https://goo.gl/3P25GU"
                // target="_blank"
                className="btn btn-black"
              >
                Apply
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apply;
