import React from "react";
import { Link } from "react-scroll";
import btnImg from "../../assets/cvImage.png";
import profile from "../../assets/profile.png";
import "./intro.css";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Piyush</span>
          <br />
          Software Engineer
        </span>
        <p className="introPara">
          I’m passionate about creating elegant solutions to complex problems.
          Whether it’s optimizing algorithms or designing intuitive user
          interfaces, I thrive on the challenge.
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="" srcset="" className="btnImg" />
            Download CV
          </button>
        </Link>
      </div>
      <img src={profile} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
