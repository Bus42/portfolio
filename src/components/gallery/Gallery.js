import React, { Component } from 'react';
import './Gallery.css';
import testImg from '../../assets/me_on_yale.jpg';

export class Gallery extends Component {

    render() {

        return (
            <div id="gallery-wrapper">
                <ul className="app-list" >
                    <li className="app-list-item" >
                        <div className="app-list-item-wrapper">
                            <h3>Sample App Title <small> and brief description</small></h3>
                            <figure>
                                <img src={testImg} alt="#" />
                                <figcaption>
                                    Test text for test app image
                                </figcaption>
                            </figure>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}