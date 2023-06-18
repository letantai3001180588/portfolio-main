import React from "react";
import bee from "../public/img/bee.png";
import image from "../public/img/coding.png";

export default function AboutMe() {
  return (
    <div className="section-about" id="aboutme">
      <div className="aboutme-container">
        <img src={image} className="graphic" alt="3D graphic" />
        <div className="description">
          <h2>About me</h2>
          <div className="text">
            My aim is to become a Fullstack web developer.
            Currently, I have learnt HTML, CSS, JavaScript, ReactJS as Frontend also NodeJS, ExpressJS and MongoDB as backend
            <img src={bee} />
          </div>
        </div>
      </div>
    </div>
  );
}
