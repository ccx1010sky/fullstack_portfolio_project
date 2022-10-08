import React,{ useState, useEffect} from "react";
import "./Skills.scss";
import { urlFor, client } from "../../client";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const skillsQuery = "*[_type == 'skills']";
    const query = " *[_type == 'experiences']";
    client.fetch(query).then((data) => setSkills(data));

    client.fetch(query).then((data) => setExperiences(data));
  }, []);

  return (
    <div className="app__skills">
      <h2 className="head-text"> Work & Experience</h2>

      <div className="app__skills-container app__flex">
        <div className="app__skills-list app__flex">
          {skills.map((skill,index)=>
          (
            <div className="app__skill-item app__flex">
              <div
                className="app__flex}"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </div>
          )
          )}
        </div>

        <div className="app__skills-experience app__flex">
          year and role comapany
        </div>
      </div>
    </div>
  );
};

export default Skills;
