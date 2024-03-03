import React from "react";
import "./Navbar.css";
import Glogo from "../assets/Glogo2.jpg";
import { Link } from "react-scroll";
const Nav = () => {
  return (
    <div className="Navbar">
      <img src={Glogo} alt="logo" className="logo" />
      <div className="headings">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="topic"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="topic"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="topic"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="topic"
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Nav;
