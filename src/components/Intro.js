import "./Intro.css";

import resume from "../assets/GauthamCV4.pdf";
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
          I am skilled in website and app development, passionate about learning
          new technologies, and proficient in data structures and algorithms,
          having solved over 120+ problems on LeetCode.
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
