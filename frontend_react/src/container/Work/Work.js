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
    const query = '*[_type = "works"]';
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
      <h2>
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
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

      <div className="app__pic">
        {filterWork.map((work, index) => (
          <div>
            <div>
              <img src={urlFor(work.ImgUrl)} atl={work.name} />
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
      </div>
    </div>
  );
};

export default Work;
