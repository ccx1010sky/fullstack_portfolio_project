import React from 'react'
import { BsTwitter } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from 'react-icons/fa'
import "./SocialMedia.scss"

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsTwitter />
      </div>
      <div>
        <FaFacebook />
      </div>
      <div>
        <FaLinkedin />
      </div>

      
    </div>
  );
}

export default SocialMedia