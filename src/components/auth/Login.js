import React, { Component } from "react";
import { Link } from "react-router-dom";

import TextFieldGroup from "../common/TextFieldGroup";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <section
        className="price-area section-gap whole-wrap"
        style={{ margin: "30px", padding: "150px 0 150px 0" }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-70 col-lg-5">
              <div className="card">
                <article className="card-body">
                  <Link
                    to="/register"
                    className="float-right btn btn-outline-primary"
                  >
                    Sign up
                  </Link>
                  <h4 className="card-title mb-4 mt-1">Sign in</h4>

                  <hr />
                  <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      name="email"
                      placeholder="Email address"
                      value={this.state.email}
                      type="email"
                      onChange={this.onChange}
                      icon="fa fa-envelope"
                    />
                    <TextFieldGroup
                      name="password"
                      placeholder="password"
                      value={this.state.password}
                      type="password"
                      onChange={this.onChange}
                      icon="fa fa-lock"
                    />
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                    <p className="text-center">
                      Forgot password? <Link to="">Reset Password</Link>{" "}
                    </p>
                  </form>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
