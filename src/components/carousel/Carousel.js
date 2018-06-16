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
        return (
            <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={9} >
                <Slider>
                    <Slide index={0}><figure><img src={pomodoro} alt="Screenshot of Pomodoro app" /><figcaption>Pomodoro Timer</figcaption></figure></Slide>
                    <Slide index={1}><figure><img src={jscalc} alt="Screenshot of JS Calculator" /><figcaption>JavaScript Calculator</figcaption></figure></Slide>
                    <Slide index={2}><figure><img src={jsclock} alt="Screenshot of JS Clock" /><figcaption>JavaScript Clock</figcaption></figure></Slide>
                    <Slide index={3}><figure><img src={mtgcounter} alt="Screenshot of MTG Counter" /><figcaption>MTG Counter</figcaption></figure></Slide>
                    <Slide index={4}><figure><img src={simon} alt="Screenshot of Simon clone" /><figcaption></figcaption>Simon Clone</figure></Slide>
                    <Slide index={5}><figure><img src={tictactoe} alt="Screenshot of Tic Tac Toe" /><figcaption>Tic Tac Toe</figcaption></figure></Slide>
                    <Slide index={6}><figure><img src={twitch} alt="Screenshot of Twitch app" /><figcaption>Twitch.tv app</figcaption></figure></Slide>
                    <Slide index={7}><figure><img src={weatherapp} alt="Screenshot of Weather App" /><figcaption>Simple weather app</figcaption></figure></Slide>
                    <Slide index={8}><figure><img src={wikireader} alt="Screenshot of WikiReader" /><figcaption>WikiReader</figcaption></figure></Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        );
    }
}