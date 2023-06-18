import React, { useState } from "react";
import page1 from "../public/img/page1.png";
import cssIco from "../public/img/css.png";
import reactIco from "../public/img/react.png";
import gitIco from "../public/img/githubIco.png";
import liveIco from "../public/img/live.png";
import bootIco from "../public/img/bootstrap.png";
import mongo from "../public/img/mongodb.png";

export default function Project1() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [boot, setBoot] = useState("");
  const [react, setReact] = useState("");
  const [three, setThree] = useState("");

  const handleMouseEnter = (e) => {
    if (e.target.id == "HTML") {
      setHtml(true);
    } else if (e.target.id == "CSS") {
      setCss(true);
    } else if (e.target.id == "JavaScript") {
      setJs(true);
    } else if (e.target.id == "Bootstrap") {
      setBoot(true);
    } else if (e.target.id == "React") {
      setReact(true);
    } else if (e.target.id == "Three.js") {
      setThree(true);
    }
  };
  const handleMouseLeave = () => {
    setHtml();
    setCss();
    setJs();
    setBoot();
    setReact();
    setThree();
  };
  return (
    <div className="project-box" data-animation="fadeInUp">
      <div className="left-container">
        <img src={page1} className="img-project1" />
      </div>
      <div className="right-container">
        <h1>Shopping shoes</h1>
        <div className="description">
          Description: Authentication, Authorization, Search product,
          Pagination, Edit information user, Cart, Order product and send mail
          (nodemailer), Admin page (CRUD product, acount, bill) and manage
          status bill
          <div className="tech-box">
            <div className="single-box">
              <img src={mongo} className="tech-ico" alt="bootstrap icon" />
            </div>
            <div className="single-box">
              <img src='https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png' className="tech-ico" alt="nodejs icon" />
            </div>
            <div className="single-box">
              <img src={reactIco} className="tech-ico" alt="html icon" />
            </div>
            <div className="single-box">
              <img src='https://avatars.githubusercontent.com/u/9950313?v=4&s=400' className="tech-ico" alt="nodejs icon" />
            </div>
          </div>
          <div className="links">
            <a
              href="https://github.com/letantai3001180588/Shopping-Web"
              target="blank"
            >
              <img src={gitIco} className="liveIco" alt="github icon" />
              <span>GitHub</span>
            </a>
            <a
              href="https://shopping-2fep.onrender.com/"
              target="_blank"
            >
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
    </div>
  );
}
