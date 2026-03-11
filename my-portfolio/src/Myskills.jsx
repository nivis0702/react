import css from "./assets/img14.png"
import javascript from "./assets/img13.png"
import react from "./assets/img15.png"
import html from "./assets/img12.png"

const Skills = () => {
  const skillList = [
    { src: html, label: "HTML" },
    { src: css, label: "CSS" },
    { src: javascript, label: "JavaScript" },
    { src: react, label: "React" },
  ];

  return (
    <div id="skills" className="myskill">
      <div className="course">
        <h1>My Skills</h1>
      </div>
      <div className="details">
        {skillList.map((skill, i) => (
          <div key={i} className="skill-card">
            <img src={skill.src} alt={skill.label} />
            <p>{skill.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;