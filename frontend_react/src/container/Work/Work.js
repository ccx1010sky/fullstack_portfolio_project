import React, {useState, useEffect} from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { useFor, client } from "../../client";
import AppWrap from "../../wrapper/AppWrap";
import "./Work.scss";



const Work = () => {

   const [works, setWorks] = useState([]);
   const [filterWork, setFilterWork] = useState([]);
   const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const query= '*[_type = "works"]'
    client.fetch(query)
    .then(
      (data)=>{
      setWorks(data) 
      setFilterWork(data)}
    )
    
  }, [])
  
  const worksArr = ["UI/UX", "Web App", "Mobile App", "ReactJS", "All"];

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
  };





  return (
    <div className="app__work app__flex">
      <h2>
        My Creative <span>Portfolio</span> Section
      </h2>
      <div className="app__work-filter">
        {worksArr.map((item, index) => (
          <div
            className="app__work-filter-item  app__flex"
            key={item + index}
            onClick={() => handleWorkFilter(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
