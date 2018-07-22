import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="section-header">
        <nav className="navbar navbar-landing navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand mr-auto" to="/">
              <img className="logo" src="images/logo-white.png" /> LOGO
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar1"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbar1">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#intro">
                    + Save
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#features">
                    Features
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="http://example.com"
                    id="dropdown07"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Bookmark
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdown07">
                    <Link className="dropdown-item" to="/add-bookmark">
                      Bookmark
                    </Link>
                    <Link className="dropdown-item" to="/advanced_bookmarking">
                      Documents
                    </Link>
                    <Link className="dropdown-item" to="/advanced_bookmarking">
                      Images
                    </Link>
                    <Link className="dropdown-item" to="/advanced_bookmarking">
                      Videos
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="icontext">
                    <div className="icon-wrap">
                      <i className="icon-sm round border fa fa-user" />
                    </div>
                    <div className="text-wrap">
                      <div>
                        <Link to="/login"> Sign in | Join</Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- container //  --> */}
        </nav>
      </header>
    );
  }
}

export default Header;
