import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./SocialMedia.scss";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/" target="_blank">
          <FaFacebook />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/nick-chenxi-c-541868158/details/skills/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
