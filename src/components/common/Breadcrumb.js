import React from "react";
import PropTypes from "prop-types";

const Breadcrumb = ({ title, description }) => {
  return (
    <section
      className="relative about-banner"
      id="home"
      style={{
        padding: "8rem 0 0 0",
        background: "linear-gradient(to right bottom, #0F887D,#88BEBC)"
      }}
    >
      <div className="overlay overlay-bg" />
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="about-content col-lg-12">
            <h1 className="text-white">{title}</h1>
            <p className="text-white link-nav">
              <a href="index.html" className="text-white">
                Home{" "}
              </a>
              <span className="lnr lnr-arrow-right text-white" />
              <a href="elements.html" className="text-white">
                {" "}
                {description}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Breadcrumb;
