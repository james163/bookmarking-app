import React, { Component } from "react";
import Breadcrumb from "../common/Breadcrumb";

import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import SelectListGroup from "../common/SelectListGroup";

class Create_Bookmark extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      title: "",
      description: "",
      share: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    // Select options for status
    const options = [{ label: "* Select A group", value: 0 }];

    return (
      <div className="CreateProfile">
        <Breadcrumb title="Bookmark" description="Add A new Bookmark" />
        <section
          className="services-area section-gap"
          style={{ paddingBottom: "20px", paddingTop: "20px" }}
        >
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content  col-lg-7">
                <div className="title text-center">
                  <h1 className="mb-10">Create Your Bookmark</h1>
                  <p>
                    Let's get some information to make your Bookmark more
                    descriptive
                    <small className="d-block pd-3 text-center">
                      * = required fields
                    </small>
                  </p>

                  <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                      <div className="col">
                        <TextFieldGroup
                          placeholder="* URL"
                          name="url"
                          value={this.state.url}
                          onChange={this.onChange}
                          info="Correctly formarted URL."
                        />
                      </div>
                      <div className="col">
                        <TextFieldGroup
                          placeholder="* Title"
                          name="title"
                          value={this.state.title}
                          onChange={this.onChange}
                          info="Website Name"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col">
                        <TextAreaFieldGroup
                          placeholder="Short Description"
                          name="description"
                          value={this.state.description}
                          onChange={this.onChange}
                          info="Tell us a little about the named url"
                        />
                      </div>
                      <div className="col">
                        <SelectListGroup
                          placeholder="Share to group"
                          name="share"
                          value={this.state.share}
                          onChange={this.onChange}
                          options={options}
                          info="Give us an idea of where you are at in your career"
                        />
                      </div>
                    </div>

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

export default Create_Bookmark;
