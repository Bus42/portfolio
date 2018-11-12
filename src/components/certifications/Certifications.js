import './certifications.css'
import React from 'react';
import responsive from '../../assets/responsive-web-design.png';
import javascriptAlgorithms from '../../assets/javascript-algorithms-and-data-structures.png';
import frontEnd from '../../assets/front-end-development.png';
class Certifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            certifications: [
                {
                    name: 'Responsive Web Design',
                    src: responsive,
                    title: 'responsive-web-design',
                    url: 'https://www.freecodecamp.org/certification/bus42/responsive-web-design'
                },
                {
                    name: 'JavaScript Algorithms and Data Structures',
                    src: javascriptAlgorithms,
                    title: 'javascript-algorithms-and-data-structures',
                    url: 'https://www.freecodecamp.org/certification/bus42/javascript-algorithms-and-data-structures'
                },
                {
                    name: 'Front End Development',
                    src: frontEnd,
                    title: 'legacy-front-end',
                    url: 'https://www.freecodecamp.org/certification/bus42/legacy-front-end'
                }
            ]
        }
        }
 
        
        handleClick = (id) => {
            let thisCert = document.getElementById(id);
            if(thisCert.webkitRequestFullscreen){
                thisCert.webkitRequestFullscreen();
            }
        }
    render() {
        return ( 
        <div id="certifications-wrapper" className="container-fluid">
        {this.state.certifications.map(certification => (
            <img
            id={certification.title}
            className="certification" 
            key={certification.title} 
            alt={certification.name} 
            src={certification.src}
            title={`View original at ${certification.url}`}
            onClick={(e)=>{this.handleClick(e.target.id)}}
            ></img>
            ))}
        </div> );
    }
}
 
export default Certifications;