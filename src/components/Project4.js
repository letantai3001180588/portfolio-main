import React, { useState } from "react";
import page4 from "../public/img/page4.png";
import redux from "../public/img/redux.png";
import reactIco from "../public/img/react.png";
import gitIco from "../public/img/githubIco.png";
import sass from "../public/img/sass.png";

export default function Project4() {

  return (
    <div className="project-box">
      <div className="right-container">
        <h1>Milk Tea Shop</h1>
        <div className="description">
          Description:<br/> 
            1. Cart control for adding correctly amounts if item is already in cart.<br/> 
            2. If item not in cart, add to it normally.<br/> 
            3. Item removal in case of subtracting less than 1 amount, or subtracts amount.<br/> 
            4. Empty cart feature.<br/> 
            5. All features above are controlled via Redux dispatch actions.<br/> 
          <div className="tech-box">
            <div className="single-box">
              <img src={reactIco} className="tech-ico" alt="html icon" />
            </div>
            <div className="single-box">
              <img src={redux} className="tech-ico" alt="css icon" />
            </div>
            <div className="single-box">
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png' className="tech-ico" alt="css icon" />
            </div>
            <div className="single-box">
              <img src={sass} className="tech-ico" alt="css icon" />
            </div>
          </div>
          <div className="links">
            <a href="https://github.com/letantai3001180588/MilkTeaOrder" target="_blank">
              <img src={gitIco} className="liveIco" alt="github icon" />
              <span>GitHub</span>
            </a>
            <a href="https://milk-tea-shop-yvuk.onrender.com/" target="_blank">
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
        <img src={page4} className="img-project2" />
      </div>
    </div>
  );
}
