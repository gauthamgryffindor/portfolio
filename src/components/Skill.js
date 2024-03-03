import "./Skill.css";
import React from "react";
const Skill = () => {
  const skill = [
    {
      imageUrl: require("../assets/google-cloud.png"),
      label: "Google cloud  platform",
    },
    {
      imageUrl: require("../assets/firebaselogo.png"),
      label: "Firebase",
    },
    {
      imageUrl: require("../assets/android.png"),
      label: "Android",
    },
    {
      imageUrl: require("../assets/java.png"),
      label: "Java",
    },
    {
      imageUrl: require("../assets/html-5.png"),
      label: "HTML",
    },
    {
      imageUrl: require("../assets/physics.png"),
      label: "ReactJS",
    },
    {
      imageUrl: require("../assets/python.png"),
      label: "Python",
    },
    {
      imageUrl: require("../assets/java-script.png"),
      label: "JavaScript",
    },
    {
      imageUrl: require("../assets/database.png"),
      label: "SQL",
    },
    {
      imageUrl: require("../assets/plsqllogo.png"),
      label: "PL/SQL",
    },
    {
      imageUrl: require("../assets/reduxlogo.png"),
      label: "Redux",
    },
    {
      imageUrl: require("../assets/css-3.png"),
      label: "CSS",
    },
  ];
  return (
    <div id="skill" className="skills">
      <h1>Skills</h1>
      <div className="grid-container">
        {skill.map((item, index) => (
          <div key={index} className="grid-item">
            <img
              src={process.env.PUBLIC_URL + item.imageUrl}
              alt={item.label}
            />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skill;
