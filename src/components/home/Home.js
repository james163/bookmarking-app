import React from "react";

const Home = () => {
  return (
    <div>
      {/* <!-- ========================= SECTION INTRO ========================= --> */}
      <section id="intro" className="section-intro bg-secondary pt-5">
        <div className="container">
          <div className="row d-flex" style={{ minHeight: "600px" }}>
            <div className="col-sm-6 d-flex align-items-center">
              <header className="intro-wrap text-white">
                <h2 className="display-3">
                  A reading later app designed for those research projects.
                </h2>
                <p className="lead">
                  You can save web pages and PDFs to your library,
                  <br />highlighting anything you need to remember and adding
                  notes for your own reference.{" "}
                </p>
                <a href="#" className="btn btn-warning">
                  Sign in
                </a>
                <a href="#" className="btn btn-light">
                  Sign up
                </a>
              </header>
              {/* <!-- intro-wrap .// --> */}
            </div>
            {/* <!-- col.// --> */}
            <div className="col-sm-6 text-right">
              <img
                src="images/items/comp.png"
                className="img-fluid my-5"
                width="500"
              />
            </div>
            {/* <!-- col.// --> */}
          </div>
          {/* <!-- row.// --> */}
        </div>
        {/* <!-- container .//  --> */}
      </section>
      {/* <!-- ========================= SECTION INTRO END// ========================= --> */}
      {/* <!-- ========================= SECTION FEATURES ========================= --> */}
      <section id="features" className="section-features bg2 padding-y-lg">
        <div className="container">
          <header className="section-heading text-center">
            <h2 className="title-section">How it works </h2>
            <p className="lead">
              {" "}
              Good sub heading this sounded nonsense to Alice{" "}
            </p>
          </header>
          {/* <!-- sect-heading --> */}

          <div className="row">
            <aside className="col-sm-4">
              <figure className="itembox text-center">
                <span className="icon-wrap icon-lg bg-secondary white">
                  <i className="fa fa-envelope-open" />
                </span>
                <figcaption className="text-wrap">
                  <h4 className="title">Sync across all devices</h4>
                  <p>
                    Getting a website that looks awesome across all devices is a
                    touch away. Simply design your website once and get a mobile
                    friendly website that looks great on desktops, mobiles,
                    tablets and more! Preview your website to view exactly how
                    it’ll look on all devices.
                  </p>
                </figcaption>
              </figure>
              {/* <!-- iconbox // --> */}
            </aside>
            {/* <!-- col.// --> */}
            <aside className="col-sm-4">
              <figure className="itembox text-center">
                <span className="icon-wrap icon-lg bg-secondary  white">
                  <i className="fa fa-heart" />
                </span>
                <figcaption className="text-wrap">
                  <h4 className="title">SEO-OPTIMIZED</h4>
                  <p>
                    Precise optimization makes it easy to target your exact
                    target audience. Reach more people by enhancing your search
                    performance and get more visitors to your website. Don’t get
                    lost in the search jungle and get found by your customers!
                  </p>
                </figcaption>
              </figure>
              {/* <!-- iconbox // --> */}
            </aside>
            {/* <!-- col.// --> */}
            <aside className="col-sm-4">
              <figure className="itembox text-center">
                <span className="icon-wrap icon-lg bg-secondary  white">
                  <i className="fa fa-users" />
                </span>
                <figcaption className="text-wrap">
                  <h4 className="title">SUPPORT</h4>
                  <p>
                    Bookmark’s dedicated support team will be there when you
                    need it. We want to provide you with the optimal support and
                    empower you to provide the right experience to your website
                    visitors.
                  </p>
                </figcaption>
              </figure>
              {/* <!-- iconbox // --> */}
            </aside>
            {/* <!-- col.// --> */}
          </div>
          {/* <!-- row.// --> */}

          <p className="text-center">
            <br />
            <a href="#" className="btn btn-warning">
              Read More
            </a>
          </p>
        </div>
        {/* <!-- container // --> */}
      </section>
      {/* <!-- ========================= SECTION FEATURES END// ========================= --> */}
    </div>
  );
};

export default Home;
