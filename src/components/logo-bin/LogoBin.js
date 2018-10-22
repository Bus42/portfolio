import React, { Component } from 'react';
import './LogoBin.css';
import '../../assets/bootstrap.png';
import babelLogo from '../../assets/babel.png';
import bootstrapLogo from '../../assets/bootstrap.png';
import cssLogo from '../../assets/css3.svg';
import gulpLogo from '../../assets/gulp.svg';
import htmlLogo from '../../assets/html5.png';
import jqueryLogo from '../../assets/jquery.png';
import lessLogo from '../../assets/less.png';
import mongodbLogo from '../../assets/mongodb.png';
import nodejsLogo from '../../assets/nodejs.png';
import reactLogo from '../../assets/react.png';
import sassLogo from '../../assets/sass.png';
import angularLogo from '../../assets/angular.png';

class LogoBin extends Component {
    render() {

        let counter = 0;
        
        function showLogos () {
            let hiddenLogos = document.getElementsByClassName('logo');
            let currentLogo = hiddenLogos[counter];
                currentLogo.style.visibility = 'visible';
                currentLogo.classList.add('animated', 'rotateIn');
                counter++;
                if (counter === hiddenLogos.length) {
                    clearInterval(rollOut);
                };
        };

        let rollOut = setInterval(showLogos, 300);

        window.onload = rollOut;

        return (
            <div id="logoBin-wrapper" >
                <img className="logo" src={babelLogo} alt='Babel logo' />
                <img className="logo" src={bootstrapLogo} alt='Bootstrap logo' />
                <img className="logo" src={cssLogo} alt='CSS logo' />
                <img className="logo" src={gulpLogo} alt='Gulp logo' />
                <img className="logo" src={htmlLogo} alt='HTML5 logo' />
                <img className="logo" src={jqueryLogo} alt='jQuery logo' />
                <img className="logo" src={lessLogo} alt='Less logo' />
                <img className="logo" src={mongodbLogo} alt='Mongo DB logo' />
                <img className="logo" src={nodejsLogo} alt='Node JS logo' />
                <img className="logo" src={reactLogo} alt='React JS logo' />
                <img className="logo" src={sassLogo} alt='Sass logo' />
                <img className="logo" src={angularLogo} alt='Angular logo' />
            </div>
        )
    }
}

export default LogoBin;