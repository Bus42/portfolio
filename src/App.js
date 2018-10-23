import React, { Component } from "react";
import { PanelGroup, Panel } from "react-bootstrap";
//import logo from './logo.svg';
import "./App.css";
import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
import LogoBin from "./components/logo-bin/LogoBin";
import Footer from "./components/footer/Footer";

// eslint-disable-next-line
import pomodoro from "./assets/pomodoro.png";
// eslint-disable-next-line
import simon from "./assets/simon.png";
// eslint-disable-next-line
import tictactoe from "./assets/tictactoe.png";
// eslint-disable-next-line
import JS_Calculator from "./assets/JS_Calculator.png";
// eslint-disable-next-line
import JSclock from "./assets/JSclock.png";
// eslint-disable-next-line
import wikireader from "./assets/wikireader.png";
// eslint-disable-next-line
import mtgcounter from "./assets/mtgcounter.png";
// eslint-disable-next-line
import magic_counter from "./assets/magic_counter.png";
import PanelBodyContent from "./components/panelBodyContent/PanelBodyContent";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      apps: [
        {
          //Magic Counter - Mobile
          key: 8,
          href: "https://magiccounter.studio42dev.com",
          title: "Magic Counter",
          brief: "A life counter for mobile devices.",
          image: require("./assets/magic_counter.png"),
          description:
            "This is the second version of this app that I have built. I wanted an app that functioned as a native app on mobile devices and could be packaged for mobile app stores on all platforms. It utilizes Google and Facebook analytics and uses Firebase for authentication and database integration. You can play anonymously and change your name, background, and avatar or create an account to keep track of wins and losses as well as your chosen customizations. Additional damage types may be selected as well. There is a walkthrough option in the menu to showcase the app's features.",
          iframe: false
        },
        {
          //Magic Counter - Desktop
          key: 7,
          href: "https://bus42.github.io/mtg-counter/",
          title: "MTG Counter",
          brief: "A configurable multiplayer life counter for desktop",
          image: require("./assets/mtgcounter.png"),
          description:
            "A life counter for games like Magic: The Gathering which allows one to choose the number of players, roll a D6, and change fonts, backgrounds, and player names.",
            iframe: true
        },
        {
          //Simon Game
          key: 2,
          href: "https://bus42.github.io/simonClone/",
          title: "Simon Game",
          brief: "A Simon clone made for FreeCodeCamp",
          image: require("./assets/simon.png"),
          description:
            "Play the classic Simon game! You can play in strict mode as well, where you lose if you get it wrong once. In regular mode you have three chances to match the pattern each time a button is added to the pattern. Get it right 20 rounds in a row and you win the game.",
            iframe: false
        },
        {
          //TicTacToe
          key: 3,
          href: "https://bus42.github.io/tictactoe/",
          title: "Tic-Tac-Toe Game",
          brief: "A simple game made for FreeCodeCamp",
          image: require("./assets/tictactoe.png"),
          description:
            "It's the classic game of Tic-Tac-Toe. Choose your team and beat the computer.",
            iframe: true
        },
        {
          //Pomodoro Clock
          key: 1,
          href: "https://bus42.github.io/pomodoro/",
          title: "Pomodoro Clock",
          brief: "A time management app",
          image: require("./assets/pomodoro.png"),
          description:
            "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. These intervals are named pomodoros, the plural in English of the Italian word pomodoro (tomato), after the tomato-shaped kitchen timer that Cirillo used as a university student. I find this very useful when working on apps and coding challenges.",
            iframe: false
        },
        {
          //Calculator
          key: 4,
          href: "https://bus42.github.io/JSCalculator/",
          title: "JS Calculator",
          brief: "A calculator built with no frameworks or libraries.",
          image: require("./assets/JS_Calculator.png"),
          description:
            "This was built for FreeCodeCamp. While not a requirement for the assignment, I wanted to demonstrate use of CSS flexbox and vanilla JS - however, I did use math.js.",
            iframe: true
        },
        {
          //Clock
          key: 5,
          href: "https://bus42.github.io/JSClock/",
          title: "CSS + JS Clock",
          brief: "A simple analog clock",
          image: require("./assets/JSclock.png"),
          description:
            "An analog clock designed with plain old javascript and CSS.",
            iframe: false
        },
        {
          //Wikipedia Reader
          key: 6,
          href: "https://bus42.github.io/wiki-reader/",
          title: "Wikipedia Reader",
          brief: "Fetches a list of articles or a random article",
          image: require("./assets/wikireader.png"),
          description:
            "This app has a random page generator which will display a random Wikipedia article in a new window or allow you to enter any search term and show you the top ten rated results with a link that will open in another tab in your browser.",
            iframe: true
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-wrapper-inner">
          <Header />
          <LogoBin />
          <Welcome />
          <div className="container-fluid">
            <PanelGroup id="app_panel" accordion>
              {this.state.apps.map(app => {
                return (
                  <Panel id={app.title} eventKey={app.key} key={app.key}>
                    <Panel.Heading style={{ textAlign: "left" }}>
                      <Panel.Title toggle>
                        <h3 style={{ display: "inline-block" }}>{app.title}</h3>
                        <small>{app.brief}</small>
                      </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                      <PanelBodyContent
                        app={app}
                      />
                      <p>{app.description}</p>
                    </Panel.Body>
                  </Panel>
                );
              })}
            </PanelGroup>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
