import React from "react";
import menu from "../public/img/logoDev.png";
import avatar from "../public/img/letantai.png";
import cv from '../public/CV_LeTanTai_Intern.pdf'

const name = `Front-End React Developer`;

export default function Navbar() {
  return (
    <div className="nav-section">
      <div className="nav-container">
        <img src={menu}  style={{width:7+'rem'}}/>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#aboutme">About me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
          <a target="_blank" href={cv} download={cv}>
            <div className="btn-download">
                Download my cv
            </div>
          </a>
        <img src={avatar} className="avatar" alt="avatar" />

      </div>
    </div>
  );
}
