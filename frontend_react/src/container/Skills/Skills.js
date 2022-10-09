import React, { useState, useEffect } from "react";
import "./Skills.scss";
import { urlFor, client } from "../../client";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = " *[_type == 'experiences']";
    const skillsQuery = "*[_type == 'skills']";

    client.fetch(query).then((data) => setExperiences(data));
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div className="app__skills">
      <h2 className="head-text"> Work & Experience</h2>

      <div className="app__skills-container">
        <div className="app__skills-list app__flex">
          {skills.map((skill, index) => (
            <div className="app__skill-item app__flex">
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </div>
          ))}
        </div>

        <div className="app__skills-experience app__flex">
          
          {experiences.map((experience, index) => (
            <div>

              <p>{experience.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
          
export default Skills;
