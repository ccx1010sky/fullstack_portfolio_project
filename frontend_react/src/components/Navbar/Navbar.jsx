import React from 'react'
import "./Navbar.scss";
import { images } from "../../constants"

const arr = ["home","about","skills","work","contact"]

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={images.logo} alt="logo" />
      </div>
      <ul>
        {arr.map(item => (
          <li key= {`link-${item}`}>
            <div />
            <a href= { `#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar