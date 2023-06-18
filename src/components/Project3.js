import React, { useState } from "react";
import page3 from "../public/img/page3.png";
import htmlIco from "../public/img/html.png";
import bts from "../public/img/bootstrap.png";
import jsIco from "../public/img/js.png";
import bootIco from "../public/img/bootstrap.png";
import reactIco from "../public/img/react.png";
import threeIco from "../public/img/three.png";
import gitIco from "../public/img/githubIco.png";
import liveIco from "../public/img/live.png";
import firebaseIco from "../public/img/firebase.png";

export default function Project3() {
  return (
    <div className="project-box">
      <div className="left-container">
        <img src={page3} className="img-project3" />
      </div>
      <div className="right-container">
        <h1>Todolist</h1>
        <div className="description">
          Description: Create, Read, Update, Delete, Recycling
          <div className="tech-box">
          <div className="single-box">
              <img src={reactIco} className="tech-ico" />
            </div>
            <div className="single-box">
              <img src={bts} className="tech-ico" />
            </div>
          </div>
          
          <div className="links">
            <a href="https://github.com/Letantai3001180588/Todolist-Web" target="_blank">
              <img src={gitIco} className="liveIco" alt="github icon" />
              <span>GitHub</span>
            </a>
            <a href="https://letantai3001180588.github.io/Todolist-Web/" target="_blank">
              <img src='https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-globe-icon-svg-wikimedia-commons-21.png' className="liveIco" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
