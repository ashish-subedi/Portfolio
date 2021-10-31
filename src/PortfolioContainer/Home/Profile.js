import React from "react";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="#">
              <i className="fa fa-envelope size=2x"></i>
            </a>
            <a href="#">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://github.com/ashish-subedi">
              <i className="fa fa-github"></i>
            </a>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Ashish</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Dedicated Developer",
                    2000,
                    "FrontEnd Developer",
                    2000,
                    "MERN Stack Developer",
                    2000,
                    "QA Analyst",
                    2000,
                    "Cross Platform Developer",
                    2000,
                    "React Developer",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                I am a dedicated developer and so on and so on.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="resume.pdf" download="resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
