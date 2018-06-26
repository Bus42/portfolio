import React from 'react';

//picture imports
import pomodoroImg from '../../assets/pomodoro.png';
import simonImg from '../../assets/simon.png';
import tictactoeImg from '../../assets/tictactoe.png';
import jscalculatorImg from '../../assets/JS_Calculator.png';
import jsclockImg from '../../assets/JSclock.png';
import wikireaderImg from '../../assets/wikireader.png';
import mtgcounterImg from '../../assets/mtgcounter.png';

let apps = [];

class App {
    constructor(key, href, title, brief, name, image, description) {
        this.key = key;
        this.href = href;
        this.title = title;
        this.brief = brief;
        this.name = name;
        this.image = image;
        this.description = description;
    }
};

const pomodoro = new App(1, "https://bus42.github.io/pomodoro/", "Pomodoro Clock", "An app to help with time management.", "pomodoro", {pomodoroImg}, "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. These intervals are named pomodoros, the plural in English of the Italian word pomodoro (tomato), after the tomato-shaped kitchen timer that Cirillo used as a university student. I find this very useful when working on apps and coding challenges.");
apps.push(pomodoro);

const simon = new App(2, "https://bus42.github.io/simonClone/", "Simon Game", "A Simon clone made for FreeCodeCamp", "simon", {simonImg}, "Play the classic Simon game! You can play in strict mode as well, where you lose if you get it wrong once. In regular mode you have three chances to match the pattern each time a button is added to the pattern. Get it right 20 rounds in a row and you win the game.");
apps.push(simon);

const tictactoe = new App(3, "https://bus42.github.io/tictactoe/", "Tic-Tac-Toe Game", "A simple game made for FreeCodeCamp", "tictactoe", {tictactoeImg}, "Just what it says, it's the classic game of Tic-Tac-Toe. Choose your team and beat the computer.");
apps.push(tictactoe);

const JS_Calculator = new App(4, "https://bus42.github.io/JSCalculator/", "JS Calculator", "A calculator built with no frameworks or libraries.", "JS_Calculator", {jscalculatorImg}, "This was built for FreeCodeCamp. While not a requirement for the assignment, I wanted to demonstrate use of CSS flexbox and vanilla JS - however, I did use math.js for security purposes.");
apps.push(JS_Calculator);

const day_2 = new App(7, "https://bus42.github.io/JSClock/", "CSS + JS Clock", "A simple analog clock", "day_2", {jsclockImg}, "An analog clock designed with plain 'ol javascript and CSS.");
apps.push(day_2);

const wiki = new App(9, "https://bus42.github.io/wiki-reader/", "Wikipedia Reader", "Fetches a list of articles or a random article", "wiki", {wikireaderImg}, "This app has a random page generator which will display a random Wikipedia article in a new window or allow you to enter any search term and show you the top ten rated results with a link that will open in another tab in your browser.");
apps.push(wiki);

const mtg = new App(10, "https://bus42.github.io/mtg-counter/", "MTG Counter", "A configurable multiplayer life counter", "mqm", {mtgcounterImg}, "A life counter for games like Magic: The Gathering which allows one to choose the number of players, roll dice (d6 only for now), and change fonts, backgrounds, and player names.");
apps.push(mtg);


function toggleFigure (x){
    let thisFigure = document.getElementById(`${x.target.id}Figure`);
    if (thisFigure.classList.contains('collapsed')){
        thisFigure.classList.remove('collapsed');
        thisFigure.classList.add('expanded');
    } else if (thisFigure.classList.contains('expanded')){
        thisFigure.classList.remove('expanded');
        thisFigure.classList.add('collapsed');
    }
}

export default function makeAppList() {

    const appList = apps
        .filter((current) => current.key)//use only items with keys
        .map((app) => (<li className="app-list-item" key={app.key.toString()} >
            <div className="app-list-item-banner">
            <h3><a href={app.href} target={app.name} >{app.title} </a><small>{app.brief}</small></h3>
            <i id={app.name} className="fas fa-angle-down app-list-item-control" onClick={toggleFigure} ></i>
            </div>
            <figure id={app.name + "Figure"} className="collapsed" >
                <a href={app.href} ><img src={app.image} alt={"Screenshot of " + app.name + " app"} target={app.name} /></a>
                <figcaption>{app.description}</figcaption>
            </figure>
        </li>))

    return appList
}