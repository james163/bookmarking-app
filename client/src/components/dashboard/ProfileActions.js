import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className="row">
      <div className="col">
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">Profile</h5>
            <h6 class="card-subtitle mb-2 text-muted">Edit</h6>
            <p class="card-text">Update your profile</p>
            <Link to="/edit-profile" className="btn btn-light">
              <i className="fa fa-user-circle text-info mr-1" /> Edit Profile
            </Link>
          </div>
        </div>
      </div>
      <div className="col">
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">Bookmark</h5>
            <h6 class="card-subtitle mb-2 text-muted">Add</h6>
            <p class="card-text">Create a new bookmark.</p>
            <Link to="/add-bookmark" className="btn btn-light">
              <i className="fa fa-file text-info mr-1" />
              Add Bookmark
            </Link>
          </div>
        </div>
      </div>
      <div className="col">
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">Documents</h5>
            <h6 class="card-subtitle mb-2 text-muted">Upload</h6>
            <p class="card-text">Upload PDF files</p>
            <Link to="/add-education" className="btn btn-light">
              <i className="fa fa-book text-info mr-1" />
              Add Documents
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileActions;
