import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
class Header extends Component {
  onLogoutClick(e) {
    e.preventDefault();

    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div style={{ display: "flex" }}>
        <li>
          <Link
            to="/dashboard"
            className="nav-link page-scroll"
            style={{ color: "white" }}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            className="nav-link page-scroll"
            style={{ color: "white" }}
            to=""
            onClick={this.onLogoutClick.bind(this)}
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px", marginRight: "5px" }}
              title="You must have a Gravatar connected to your email to display an image"
            />{" "}
            Logout
          </Link>
        </li>
      </div>
    );
    const guestLinks = (
      <li>
        <Link
          to="/login"
          className="nav-link page-scroll"
          style={{ color: "white" }}
        >
          Login
        </Link>
      </li>
    );

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
                {isAuthenticated ? authLinks : guestLinks}
              </ul>
            </div>
          </div>
          {/* <!-- container //  --> */}
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { clearCurrentProfile, logoutUser }
)(Header);
