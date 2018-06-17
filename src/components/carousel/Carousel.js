import React, { Component } from 'react';
import './Carousel.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css'
import pomodoro from '../../assets/pomodoro.png';
import jscalc from '../../assets/JS_Calculator.png';
import jsclock from '../../assets/JSclock.png';
import mtgcounter from '../../assets/mtg-counter.png';
import simon from '../../assets/simon.png';
import tictactoe from '../../assets/tictactoe.png';
import twitch from '../../assets/twitch.png'
import weatherapp from '../../assets/weatherapp.png';
import wikireader from '../../assets/wikireader.png';



export class Carousel extends Component {
    render() {

        let slider = (<Slider>
            <Slide index={0}><figure><img className="slideContent" src={pomodoro} alt="Screenshot of Pomodoro app" /><figcaption>Pomodoro Timer</figcaption></figure></Slide>
            <Slide index={1}><figure><img className="slideContent" src={jscalc} alt="Screenshot of JS Calculator" /><figcaption>JavaScript Calculator</figcaption></figure></Slide>
            <Slide index={2}><figure><img className="slideContent" src={jsclock} alt="Screenshot of JS Clock" /><figcaption>JavaScript Clock</figcaption></figure></Slide>
            <Slide index={3}><figure><img className="slideContent" src={mtgcounter} alt="Screenshot of MTG Counter" /><figcaption>MTG Counter</figcaption></figure></Slide>
            <Slide index={4}><figure><img className="slideContent" src={simon} alt="Screenshot of Simon clone" /><figcaption></figcaption>Simon Clone</figure></Slide>
            <Slide index={5}><figure><img className="slideContent" src={tictactoe} alt="Screenshot of Tic Tac Toe" /><figcaption>Tic Tac Toe</figcaption></figure></Slide>
            <Slide index={6}><figure><img className="slideContent" src={twitch} alt="Screenshot of Twitch app" /><figcaption>Twitch.tv app</figcaption></figure></Slide>
            <Slide index={7}><figure><img className="slideContent" src={weatherapp} alt="Screenshot of Weather App" /><figcaption>Simple weather app</figcaption></figure></Slide>
            <Slide index={8}><figure><img className="slideContent" src={wikireader} alt="Screenshot of WikiReader" /><figcaption>WikiReader</figcaption></figure></Slide>
        </Slider>)

        let buttons = (<div><ButtonBack><i className="fa fa-backward" ></i></ButtonBack><ButtonNext><i className="fa fa-forward" ></i></ButtonNext></div>)

        const isTouch = (navigator.maxTouchPoints > 0 ? true : false)

        if (isTouch)
            return (
                <div id="carousel-wrapper" >
                    <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={9} >
                        {slider}
                    </CarouselProvider></div>
            );

        else return (
            <div id="carousel-wrapper" >
                <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={9} >
                    {buttons}
                    {slider}
                </CarouselProvider></div>
        )
    }
}