import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
    render() {
        return (
            <div id="footer-wrapper">
                <a className="contact-link" href="http://www.facebook.com/gwbrewton" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
                <a className="contact-link" href="https://twitter.com/Bus42a" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a className="contact-link" href="https://www.linkedin.com/in/gregbrewton" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                <a className="contact-link" href="https://github.com/Bus42" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a className="contact-link" href="mailto:gbrewton1980@gmail.com?subject=Portfolio" ><i class="far fa-envelope"></i></a>
            </div>
        );
    }
}