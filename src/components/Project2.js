import React, { useState } from "react";
import page2 from "../public/img/page2.png";
import bts from "../public/img/bootstrap.png";
import reactIco from "../public/img/react.png";

import gitIco from "../public/img/githubIco.png";
import liveIco from "../public/img/live.png";
import firebaseIco from "../public/img/firebase.png";

export default function Project2() {

  return (
    <div className="project-box">
      <div className="right-container">
        <h1>Weather web</h1>
        <div className="description">
          Description: watch and search weather's city in day or week
          <div className="tech-box">
            <div className="single-box">
              <img src={reactIco} className="tech-ico" alt="html icon" />
            </div>
            <div className="single-box">
              <img src={bts} className="tech-ico" alt="css icon" />
            </div>
            
            {/* <div className="single-box">
              <img src='https://reactrouter.com/_brand/react-router-mark-color.png' className="tech-ico"/>
            </div> */}
          </div>
          <div className="links">
            <a href="https://github.com/Letantai3001180588/Weather-Web" target="_blank">
              <img src={gitIco} className="liveIco" alt="github icon" />
              <span>GitHub</span>
            </a>
            <a href="https://letantai3001180588.github.io/Weather-Web/" target="_blank">
              <img
                src='https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-globe-icon-svg-wikimedia-commons-21.png'
                className="liveIco"
                target="blank"
                alt="live icon"
              />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
      <div className="left-container">
        <img src={page2} className="img-project2" />
      </div>
    </div>
  );
}
