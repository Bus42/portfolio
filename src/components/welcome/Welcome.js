import React from "react";
import "./Welcome.css";
import myPic from "../../assets/shades.jpg";

const Welcome = () => {
    return (
        <div id="welcome-wrapper" className="container-fluid">
      <h2>Welcome to my portfolio</h2>
      <img id="my-picture" src={myPic} alt="Me on Mount Yale" />
        <p>
          Hi, I'm Greg and I like making things. Welcome to Studio42!
        </p>
        <p>
          I've focused quite a bit on writing in JavaScript without using a lot of libraries in order to understand the fundamentals of JS. You won't see a lot of jQuery in my code, but I have really taken a liking to JSX. I'm a big fan of React because I think the idea of putting HTML in my JavaScript is just awesome, though you'll see a lot of stuff coded like it's 1999 in my simpler apps. Some of my other projects, such as my final group project for CoderCamps and my MTG Counter were written using Angular.
        </p>
        <p>
          I have earned my Front End Certification from FreeCodeCamp and
          completed the Full-Stack JavaScript course from CoderCamps as well as
          a few others like Linux 101 from EdX and obtained a basic Ubuntu
          Server Setup Certification. I'm currently working on completing my full stack certification through FreeCodeCamp and learning a bit of Java and Lua on the side for some Android projects I have planned.
        </p>
    </div>
  );
};

export default Welcome;
