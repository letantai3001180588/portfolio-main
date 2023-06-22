import React, { useState } from "react";
import porfolio from "../public/img/porfolio.png";
import reactIco from "../public/img/react.png";
import gitIco from "../public/img/githubIco.png";

export default function Project5() {

  return (
    <div className="project-box">
      <div className="left-container">
        <img src={porfolio} className="img-project1" />
      </div>
      <div className="right-container">
        <h1>Porfolio</h1>
        <div className="description">
          Description:<br/>
            1. Where users can find all of my projects and links to some of my social media profiles, as well as the services I provide<br/>
            3. Users can also explore my personal information all in one place<br/>
            4. Completely responsive design<br/>
            5. This project has been deployed to Netlify nearly 2 month after completed<br/>

          <div className="tech-box">
          <div className="single-box">
              <img src={reactIco} className="tech-ico" />
            </div>
          </div>
          
          <div className="links">
            <a href="https://github.com/letantai3001180588/portfolio-main" target="_blank">
              <img src={gitIco} className="liveIco" alt="github icon" />
              <span>GitHub</span>
            </a>
            <a href="https://porfolio-letantai.onrender.com/" target="_blank">
              <img src='https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-globe-icon-svg-wikimedia-commons-21.png' className="liveIco" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
