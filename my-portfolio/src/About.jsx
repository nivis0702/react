import React from "react";
import profile from "./assets/img2.jpg";
const About = () => {
  return (
 
    <div>
      <div id="about" className="about">
        <div className="about-title">
          <h1>About Me</h1>
        </div>

        <div className="about-sections">
          <div className="about-left">
            <img src={profile} alt="profile" />
          </div>

          <div className="about-right">
            <div className="about-para">
              <p>
                I am a passionate Frontend Developer Fresher with knowledge of HTML, CSS, JavaScript, and React.js. I enjoy building responsive and user-friendly web interfaces. I have created several practice projects such as portfolio websites and small web applications to improve my development skills.
              </p>

              <p>
                I am eager to learn new technologies and improve my problem-solving abilities. My goal is to start my career as a frontend developer and contribute to building modern and interactive web applications.
              </p>
            </div>

            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "70%" }} />
              </div>

              <div className="about-skill">
                <p>JavaScript</p>
                <hr style={{ width: "70%" }} />
              </div>

              <div className="about-skill">
                <p>React JS</p>
                <hr style={{ width: "60%" }} />
              </div>

              <div className="about-skill">
                <p>Bootstrap</p>
                <hr style={{ width: "50%" }} />
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div> 
  );
};

export default About;