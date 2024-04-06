import React from "react";

export default function NavBar() {
  return (
    <div className="content account_page">
      <aside className="account_aside">
        <div className="account_profile">
          <figure>
            <img src="/static/images/dummy.png" alt="" />
          </figure>
          <div className="account_profile_detail">
            <h2>James wilson</h2>
            <p>
              <span>Male</span> <span>25 Years old</span>
            </p>
          </div>
        </div>
        <div
          className="nav nav-pills aside_menu"
          id="v-pills-tab"
          role="tablist"
        >
          <button
            className="nav-link active"
            id="v-pills-Profile-tab"
            type="button"
            role="tab"
          >
            Profile
          </button>
          <button className="nav-link" id="v-pills-Order-tab" role="tab">
            Orders History
          </button>
          <button
            className="nav-link"
            id="v-pills-Appointments-tab"
            type="button"
            role="tab"
          >
            Appointments History
          </button>
          <button
            className="nav-link"
            id="v-pills-Addresses-tab"
            datatype="button"
            role="tab"
          >
            Manage Addresses
          </button>
          <button
            className="nav-link"
            id="v-pills-Cards-tab"
            type="button"
            role="tab"
          >
            Manage Cards
          </button>
          <button
            className="nav-link"
            id="v-pills-Password-tab"
            type="button"
            role="tab"
          >
            Change Password
          </button>
        </div>
      </aside>
    </div>
  );
}
