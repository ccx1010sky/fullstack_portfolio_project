import React from "react";
import motion from "framer-motion";

import React from 'react'

const MotionWrap = (Component,classNames) => function bananaHOC() {
      return (
    <motion.div 
        whileInView= {{y:[100,50,0],opacity:[0,0,]}}
        transition= {{duration:0.5}}
    className={`app__flex ${classNames}`}>
        <Component />
    </motion.div>
  )
}

export default MotionWrap;
