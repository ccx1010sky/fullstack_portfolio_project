import React, { useState } from "react";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";
import { images } from "../../constants";

const arr = ["home", "about", "work", "skills", "contact"];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      {/* 1,logo */}
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>

      {/* 2,links */}
      <ul className="app__navbar-links">
        {arr.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* 3, menu */}
      <div className="app__navbar-menu">
        {/* HiMenuAlt4中的svg图标 */}
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [400, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            {/* Hix中的svg图标 */}
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {arr.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;



