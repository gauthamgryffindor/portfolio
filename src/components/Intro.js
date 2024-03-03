import "./Intro.css";

import resume from "../assets/Resume.pdf";
const intro = () => {
  return (
    <section className="intro" id="intro">
      <div className="introcontent">
        <span className="hello">Hello,</span>
        <span className="introtext">
          I'm<span className="name">Gautham</span>
          <br /> Web & App Developer
        </span>
        <p className="para">
          I'm skilled in website and App development and passionate for learning
          new technologies.
        </p>
        <div className="buttonbox">
          <a href={resume} download>
            <button className="button1">Resume</button>
          </a>
          <a href="mailto:gauthamgryffindor@gmail.com">
            {" "}
            <button className="button1">Contact me</button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default intro;
