import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
    render() {
        return (
            <div id="footer-wrapper">
                <a href="http://www.facebook.com/gwbrewton" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-square"></i></a>
                <a href="https://twitter.com/Bus42a" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/gregbrewton" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/Bus42" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
            </div>
        );
    }
}