import React, { Component } from "react";
import Breadcrumb from "../common/Breadcrumb";

class AdvancedBookmark extends Component {
  render() {
    return (
      <div>
        <Breadcrumb
          title="Advanced Bookmarking"
          description="Add images or pdf or videos"
        />
        {/* <!-- Button trigger modal --> */}
        <section
          className="services-area section-gap"
          style={{ paddingBottom: "20px", paddingTop: "20px" }}
        >
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content  col-lg-6">
                <div className="title text-center">
                  <h1 className="mb-10">Create Your Bookmark</h1>
                  <p>
                    Let's get some information to make your Bookmark more
                    descriptive
                    <small className="d-block pd-3 text-center">
                      * = required fields
                    </small>
                  </p>
                  <div
                    class="card-banner"
                    style={{
                      height: "250px",
                      backgroundImage: "url('images/posts/5.jpg')"
                    }}
                  >
                    <article class="overlay bottom text-center">
                      <h5 class="card-title">Some text for title</h5>
                      <button
                        type="button"
                        class="btn btn-warning btn-sm"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Launch demo modal
                      </button>
                    </article>
                  </div>
                  {/* <!-- card.// --> */}

                  {/* <!-- Modal --> */}
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">...</div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" class="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-content  col-lg-6">
                <div className="title text-center">
                  <h1 className="mb-10">Create Your Bookmark</h1>
                  <p>
                    Let's get some information to make your Bookmark more
                    descriptive
                    <small className="d-block pd-3 text-center">
                      * = required fields
                    </small>
                  </p>
                  <div
                    class="card-banner"
                    style={{
                      height: "250px",
                      backgroundImage: "url('images/posts/5.jpg')"
                    }}
                  >
                    <article class="overlay bottom text-center">
                      <h5 class="card-title">Some text for title</h5>
                      <button
                        type="button"
                        class="btn btn-warning btn-sm"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Launch demo modal
                      </button>
                    </article>
                  </div>
                  {/* <!-- card.// --> */}

                  {/* <!-- Modal --> */}
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">...</div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" class="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AdvancedBookmark;
