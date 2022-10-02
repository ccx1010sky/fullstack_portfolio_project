import React from "react";
import NavigationDots from "../components/NavigationDots";
import SocialMedia from "../components/SocialMedia";

//Higher Order Component
const AppWarp = (component, idName, classNames) => {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />

      <div className="app__wrapper  app_flex">
        <component />
        <div className="copyright">
          <p className="p-text">@ 2022 Nick</p>
          <p className="p-text">All Right Reserve</p>
        </div>
      </div>
      <NavigationDots />
    </div>
  );
};

export default AppWarp;
