import React, { useState } from "react";
import Navbar from "./Navbar";
import hiIco from "../public/img/hi.png";
import localizationIco from "../public/img/place.png";
import lndIco from "../public/img/linkedinIco.png";
import gitIco from "../public/img/githubIco.png";
import htmlIco from "../public/img/html.png";
import cssIco from "../public/img/css.png";
import jsIco from "../public/img/js.png";
import bootIco from "../public/img/bootstrap.png";
import reactIco from "../public/img/react.png";
import mongo from "../public/img/mongodb.png";
// import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
import { TypeAnimation } from 'react-type-animation';

export default function MainPage() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [boot, setBoot] = useState("");
  const [react, setReact] = useState("");
  const [nodejs, setNodejs] = useState("");
  const [expressjs, setExpressjs] = useState("");
  const [mongodb, setMongoDB] = useState("");
  const [mySQL, setMySQL] = useState("");
  const [sass, setSass] = useState("");

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
    } else if (e.target.id == "Nodejs") {
      setNodejs(true);
    }
    else if (e.target.id == "Expressjs") {
      setExpressjs(true);
    }
    else if (e.target.id == "MongoDB") {
      setMongoDB(true);
    }
    else if (e.target.id == "MySQL") {
      setMySQL(true);
    }
    else if (e.target.id == "Sass") {
      setSass(true);
    }
  };
  const handleMouseLeave = () => {
    setHtml();
    setCss();
    setJs();
    setBoot();
    setReact();
    setNodejs();
    setExpressjs();
    setMongoDB();
    setMySQL();
    setSass();
  };
  return (
    <div className="section-main" id="home">
      <Navbar />
      <div className="main-page-container">
        <div className="left-container">
          <TypeAnimation
            sequence={[
              'Fullstack Web Developer', 
              2000, 
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '4em', display: 'inline-block' }}
            repeat={Infinity}
          />
          {/* <span className="title">Fullstack Web Developer</span> */}
          <img src={hiIco} className="hello-ico" alt="hello icon" />
          <div className="description"> 
            Hi, I'm Le Tan Tai. <br/>
            Base in Ho Chi Minh 
            <a href="#contact">
              <img
                src={localizationIco}
                className="localization-ico"
                alt="localization icon"
              />
            </a>
          </div>
          <a
            href=""
            target="_blank"
          >
            <img src={lndIco} className="social-ico" alt="linkedin icon" />
          </a>
          <a href="https://github.com/letantai3001180588" target="_blank">
            <img src={gitIco} className="social-ico" alt="github icon" />
          </a>
          <div className="description">Tech Stack:</div>
          <div className="tech-stack-box" >
            <div
              className="tech-stack-single-box" 
              id="HTML"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={htmlIco} className="tech-ico1" alt="html icon" />
              <span>{html ? "HTML" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="CSS"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={cssIco} className="tech-ico1" alt="css icon" />
              <span>{css ? "CSS/SCSS" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="JavaScript"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={jsIco} className="tech-ico1" alt="js icon" />
              <span>{js ? "JavaScript" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="Bootstrap"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={bootIco} className="tech-ico2" alt="bootstrap icon" />
              <span>{boot ? "Bootstrap" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="Sass"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png' className="tech-ico2" alt="bootstrap icon" />
              <span>{sass ? "Sass" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="React"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={reactIco} className="tech-ico2" alt="react icon" />
              <span>{react ? "React.js" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="Nodejs"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src='https://avatars.githubusercontent.com/u/9950313?v=4&s=400' className="tech-ico3" alt="nodejs icon" />
              <span>{nodejs ? "Nodejs" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="Expressjs"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src='https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png' className="tech-ico3" alt="nodejs icon" />
              <span>{expressjs ? "Expressjs" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="MongoDB"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={mongo} className="tech-ico3" alt="nodejs icon" />
              <span>{mongodb ? "MongoDB" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="MySQL"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src='https://www.pngkey.com/png/full/269-2693092_my-sql-logo-png.png' className="tech-ico3" alt="nodejs icon" />
              <span>{ mySQL? "MySQL" : ""}</span>
            </div>

          </div>
        </div>
        <div className="right-container">
          {/* <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={(3, 2, 1)} />
            <Sphere args={[1, 100, 200]} scale={2.2}>
              <MeshDistortMaterial
                color="red"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas> */}
          <img src='https://react-tailwindcss-portfolio.netlify.app/static/media/developer-dark.3f07bd13.svg' className="background-IT" alt="avatar" />
        </div>
      </div>
    </div>
  );
}
