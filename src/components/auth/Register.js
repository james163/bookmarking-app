import React, { Component } from "react";
import { Link } from "react-router-dom";

import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
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
                <article
                  className="card-body mx-auto"
                  style={{ maxWidth: "400px" }}
                >
                  <h4 className="card-title mt-3 text-center">
                    Create Account
                  </h4>
                  <p className="text-center">
                    Get started with your free account
                  </p>
                  <form noValidate onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      name="name"
                      placeholder="name"
                      value={this.state.name}
                      type="text"
                      onChange={this.onChange}
                      icon="fa fa-user"
                    />
                    <TextFieldGroup
                      name="email"
                      placeholder="email"
                      value={this.state.email}
                      type="email"
                      onChange={this.onChange}
                      icon="fa fa-envelope"
                      info="This site uses Gravatar so if you want a profile image,
                        use a Gravatar email."
                    />
                    <TextFieldGroup
                      name="password"
                      placeholder="password"
                      value={this.state.password}
                      type="password"
                      onChange={this.onChange}
                      icon="fa fa-lock"
                    />
                    <TextFieldGroup
                      name="password2"
                      placeholder="Confirm password"
                      value={this.state.password2}
                      type="password"
                      onChange={this.onChange}
                      icon="fa fa-lock"
                    />
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        {" "}
                        Create Account{" "}
                      </button>
                    </div>
                    <p className="text-center">
                      Have an account? <Link to="/login">Log In</Link>{" "}
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

export default Register;
