import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import InputGroup from "../common/InputGroup";
import { createProfile } from "../../actions/profileActions";
import { withRouter } from "react-router-dom";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      website: "",
      status: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      website: this.state.website,
      status: this.state.status,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };

    this.props.createProfile(profileData, this.props.history);
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <div className="form-row">
            <div className="col">
              <InputGroup
                placeholder="Twitter Profile URL"
                name="twitter"
                icon="fa fa-twitter"
                value={this.state.twitter}
                onChange={this.onChange}
                error={errors.twitter}
              />
            </div>
            <div className="col">
              <InputGroup
                placeholder="Facebook Page URL"
                name="facebook"
                icon="fa fa-facebook"
                value={this.state.facebook}
                onChange={this.onChange}
                error={errors.facebook}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <InputGroup
                placeholder="Linkedin Profile URL"
                name="linkedin"
                icon="fa fa-linkedin"
                value={this.state.linkedin}
                onChange={this.onChange}
                error={errors.linkedin}
              />
            </div>
            <div className="col">
              <InputGroup
                placeholder="YouTube Channel URL"
                name="youtube"
                icon="fa fa-youtube"
                value={this.state.youtube}
                onChange={this.onChange}
                error={errors.youtube}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <InputGroup
                placeholder="Instagram Page URL"
                name="instagram"
                icon="fa fa-instagram"
                value={this.state.instagram}
                onChange={this.onChange}
                error={errors.instagram}
              />
            </div>
          </div>
        </div>
      );
    }
    // Select options for status
    const options = [
      { label: "* Select Professional Status", value: 0 },
      { label: "Developer", value: "Developer" },
      { label: "Junior Developer", value: "Junior Developer" },
      { label: "Senior Developer", value: "Senior Developer" },
      { label: "Manager", value: "Manager" },
      { label: "Student or Learning", value: "Student or Learning" },
      { label: "Instructor or Teacher", value: "Instructor or Teacher" },
      { label: "Intern", value: "Intern" },
      { label: "Other", value: "Other" }
    ];

    return (
      <div className="CreateProfile">
        <section className="relative about-banner" id="home">
          <div className="overlay overlay-bg" />
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="about-content col-lg-12">
                <h1 className="text-white">Profile</h1>
                <p className="text-white link-nav">
                  <a href="index.html">Home </a>
                  <span className="lnr lnr-arrow-right" />
                  <a href="elements.html"> Create Profile</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="services-area section-gap"
          style={{ paddingBottom: "20px", paddingTop: "20px" }}
        >
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content  col-lg-7">
                <div className="title text-center">
                  <h1 className="mb-10">Create Your Profile</h1>
                  <p>
                    Let's get some information to make your profile stand out
                    <small className="d-block pd-3 text-center">
                      * = required fields
                    </small>
                  </p>

                  <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      placeholder="* Profile Handle"
                      name="handle"
                      value={this.state.handle}
                      onChange={this.onChange}
                      error={errors.handle}
                      info="A unique handle for your profile URL. Your full name, company name, nickname"
                    />
                    <div className="form-row">
                      <div className="col">
                        <SelectListGroup
                          placeholder="Status"
                          name="status"
                          value={this.state.status}
                          onChange={this.onChange}
                          options={options}
                          error={errors.status}
                          info="Give us an idea of where you are at in your career"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col">
                        <TextFieldGroup
                          placeholder="Website"
                          name="website"
                          value={this.state.website}
                          onChange={this.onChange}
                          error={errors.website}
                          info="Could be your own website or a company one"
                        />
                      </div>
                    </div>
                    <TextAreaFieldGroup
                      placeholder="Short Bio"
                      name="bio"
                      value={this.state.bio}
                      onChange={this.onChange}
                      error={errors.bio}
                      info="Tell us a little about yourself"
                    />

                    <div className="mb-3">
                      <button
                        type="button"
                        onClick={() => {
                          this.setState(prevState => ({
                            displaySocialInputs: !prevState.displaySocialInputs
                          }));
                        }}
                        className="btn btn-light"
                      >
                        Add Social Network Links
                      </button>
                      <span className="text-muted">Optional</span>
                    </div>
                    {socialInputs}
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-info btn-block mt-4"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
