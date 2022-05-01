import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";


function SkillsBar({ skill, value, isScrolled }) {
  // const skill = [
  //   {type: "HTML"},
  //   {type: "CSS"},
  //   {type: "JavaScript"},
  //   {type: "jQuery"},
  //   {type: "BootStrap"},
  //   {type: "Photoshop"},
  //   {type: "Angular.js"},
  //   {type: "React.js"},
  //   {type: "PHP"},
  //   {type: "Ruby"}
  // ];
  return (
    <div style={{ width: "95%" }}>
      <p className="lead mb-1 mt-2">{skill}</p>
      <ProgressBar
        className={!isScrolled ? "progress" : " progress-bar-animation"}
        now={value}
      />
    </div>
  );
}

export default SkillsBar;
