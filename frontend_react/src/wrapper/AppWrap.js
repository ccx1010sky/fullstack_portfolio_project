import React from "react";
import NavigationDots from "../components/NavigationDots";
import SocialMedia from "../components/SocialMedia";

//Higher Order Component
const AppWrap = (Component, idName, classNames) => function bananaHOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />

      <div className="app__wrapper  app_flex">
        <Component />
        <div className="copyright">
          <p className="p-text">@ 2022 Nick</p>
          <p className="p-text">All Right Reserve</p>
        </div>
      </div>
      <NavigationDots active={idName}/>
    </div>
  );
};

export default AppWrap;
