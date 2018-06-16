import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
    render() {
        return (
            <div id="header-wrapper" >
                <i id="menu-button" className="fa fa-bars" ></i>
                <h1>Studio42</h1>
            </div>
        )        
    }
}
