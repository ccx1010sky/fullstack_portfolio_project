import React from "react";
import { motion, MotionConfig } from "framer-motion";
import { images } from "../../constants";

import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      {/* motion div1 */}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span> 👋 </span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Nick</h1>
            </div>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer,</p> 
          <p className="p-text"> Software Engineer</p>
        </div>
      </motion.div>

      {/* motion div2 */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {/* 1,profile image */}
        <img src={images.profile} alt="profile_bg" />
        {/* 2,motion circle image */}
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          src={images.vue}
          className="overlay-circle"
        />
      </motion.div>

      {/* motion div3 */}
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.html, images.javascript, images.sass].map((circle, index) => (
          <div className="circle-cmp  app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
