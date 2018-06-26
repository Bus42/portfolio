import React, { Component } from 'react';
import './Gallery.css';
import makeAppList from './Gallery_module.mjs';

export class Gallery extends Component {

    render() {

        return (
            <div id="gallery-wrapper">
                <ul className="app-list" >
                    {makeAppList()}
                </ul>
            </div>
        )
    }
}