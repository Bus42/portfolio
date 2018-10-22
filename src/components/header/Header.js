import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div id="header-wrapper" >
                <span><small>Web </small></span><h1>Studio42</h1><span><small> Dev</small></span>
            </div>
        )        
    }
}
export default Header;