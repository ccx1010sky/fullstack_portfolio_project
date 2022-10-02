import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./About.scss";
import { images } from "../../constants";

// using sanity client to populate the data
import {client, urlFor} from "../../client"
import AppWrap from "../../wrapper/AppWrap";

//static data source
// const abouts = [
//   {
//     title: "Front-end",
//     description: "I am a good front-end developer",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Back-end",
//     description: "I am a good back-end developer",
//     imgUrl: images.about02,
//   },
//   {
//     title: "UI/UX",
//     description: "I am a good UI/UX designer",
//     imgUrl: images.about03,
//   },
//   {
//     title: "Full-Stack",
//     description: "I am a good Full-Stack developer",
//     imgUrl: images.about04,
//   },
// ];

const About = () => {

 const [abouts, setAbouts] = useState([]);

// run once to fetch the data from sanity CMS when loading
// 固定写法
 useEffect(() => {
  const query = '*[_type == "abouts"]';
  client.fetch(query)
  .then((data) => setAbouts(data))
}, [])



  return (
    <>
    <br />
    <br />
    <br />
    <br />
      <h2 className="head-text">
        I know that <span>Good Design</span>
        <br />
        means
        <span> Good Job</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, 'about');
