import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import AppWrap from "../../wrapper/AppWrap";
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
        //if (work)=>work.tags.includes(item))即check-function is true, save the work into array1
        // array1 = works.filter(check-function), return back a array
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div className="app__work app__flex">
      {/* display content row */}
      {/* 1 */}
      <h2>
        My Creative <span>Portfolio</span> Section
      </h2>
      {/* 2 */}
      <div className="app__work-filter  app__flex">
        {worksArr.map((item, index) => (
          <div
            className={`app__work-filter-item  app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
            key={item + index}
            onClick={() => handleWorkFilter(item)}
          >
            {item}
          </div>
        ))}
      </div>
      {/* 3 */}
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div>
            <div>
              <img src={urlFor(work.imgUrl)} atl={work.name} />
              <motion.div>

                <a href="">{AiFillEye}</a>


                <a href="">{AiFillGithub}</a>
              </motion.div>
            </div>

            <div>
              <h2>h2</h2>
              <p>p1</p>
              <div>
                <p>p2</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
