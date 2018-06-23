import React, { Component } from 'react';
import './Welcome.css';
import me_on_yale from '../../assets/me_on_yale.jpg';

export class Welcome extends Component {
    render() {
        return (
            <div id="welcome-wrapper">
                <h2>Welcome to my portfolio</h2>
                <img id="my-picture" src={me_on_yale} alt="Me on Mount Yale" />
                <section className="section-text" >
                    <p>My name is Greg Brewton and I've been learning to code for about two years now. I built this page as a place to host a few of the apps I've built while learning from FreeCodeCamp, CoderCamps, and various other places.</p>
                    <p>I've stayed focused mainly on writing in JavaScript without using a lot of libraries like jQuery (Not that there's anything wrong with that, I just want to understand the fundamentals of JS so I know what's going on 'under the hood'.). I've also been learning to use React and Angular. The page you're reading now was written with React while some of my other projects, such as my final group project for CoderCamps, RANotes, and my MTG Counter were written using Angular.</p>
                    <p>I have earned my Front End Certification from FreeCodeCamp and completed the Full-Stack JavaScript course from CoderCamps as well as a few others like Linux 101 from EdX and Obtained a basic Ubuntu Server Setup Certification. My goal is to develop applications utilizing a MEAN (Mongo, Express, Angular, Node) stack in a Linux environment.</p>
                    <p>Below are some examples of the type of apps I've built while learning.</p>
                </section>
            </div>
        );
    }
}