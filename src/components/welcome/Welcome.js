import React from "react";
import "./Welcome.css";
import myPic from "../../assets/shades.jpg";

const Welcome = () => {
    return (
      <div id="welcome-wrapper" className="container-fluid">
        <h2>Welcome to my portfolio</h2>
        <div id='banner'>
          <img id="my-picture" src={myPic} alt="Me on Mount Yale" />
          <p>Hi, I'm Greg and I like making responsive, user-friendly sites and applications. Welcome to Studio42!</p>
        </div>
      </div>
  );
};

export default Welcome;
