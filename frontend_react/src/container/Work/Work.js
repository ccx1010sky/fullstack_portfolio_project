import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import "./Work.scss";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const worksArr = ["UI/UX", "Web App", "Mobile App", "ReactJS", "All"];

  const handleWorkFilter = (item) => {
    setActiveFilter(item);

    // setTimeout( ()=>{ },500)
    setTimeout(() => {
      setAnimateCard([{ y: 100, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        //if onClink item is not "All",then filter it out to a new array1,then set this new filtered array1 to update filterWork state
        //if (work)=>work.tags.includes(item))即check-function is true, save the work into array1
        // array1 = works.filter(check-function), return back a array
        //use tags to filter it out the item.
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    // 0
    <div className="app__works app__flex">
      {/* 1 */}
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>
      {/* -1 */}

      {/* 2 */}
      <div className="app__work-filter">
        {worksArr.map((item, index) => (
          <div
            className={`app__work-filter-item  app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
            key={index}
            onClick={() => handleWorkFilter(item)}
          >
            {item}
          </div>
        ))}
      </div>
      {/* -2 */}

      {/* 3 */}
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {/* work. title,description,projectLink,codeLink,imgUrl,tags */}
        {filterWork.map((work, index) => (
          //  html structure:[ img,[a, a],[h4,p [p]] ]
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} atl={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{duration: 0.25,ease: "easeInOut",
                staggerChildren: 0.5
                }}
                className="app__work-hover app__flex"
              >

                
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye/>
                  </motion.div>
                </a>
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub/>
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      {/* -3 */}
    </div>
    // -0
  );
};

export default AppWrap(MotionWrap(Work,'app__works'),'work',"app__primarybg");