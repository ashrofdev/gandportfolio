import React from 'react';

import html from '../img/html.png'
import css from '../img/css.png'
import js from '../img/js.png'
import react from '../img/react.png'
import git from '../img/git.png'
import responsive from '../img/responsive.png'
import firebase from '../img/firebase.png'
import api from '../img/api.png'
import npm from '../img/npm.png'

const Skills = () => {
    return (
        <div className="container">
            {/* <h3 style={{textAlign:'center', marginBottom:'2rem'}}>My skills</h3> */}

            <div className="skills">
                <div className="skill">
                    <img alt="" style={{maxWidth:'2.5rem', margin: '1rem auto'}} src={html} />
                    {/* <p style={{fontWeight:'200'}}>HTML</p> */}
                </div>
                <div className="skill">
                    <img alt="" style={{maxWidth:'2.5rem', margin: '1rem auto'}} src={css} />
                    {/* <p style={{fontWeight:'200'}}>CSS3</p> */}
                </div>
                <div className="skill">
                    <img alt="" style={{maxWidth:'2.5rem', margin: '1rem auto'}} src={js} />
                    {/* <p style={{fontWeight:'200'}}>JavaScript</p> */}
                </div>
                <div className="skill">
                    <img alt="" style={{maxWidth:'2.5rem', margin: '1rem auto'}} src={react} />
                    {/* <p style={{fontWeight:'200'}}>React.js</p> */}
                </div>
                <div className="skill">
                    <img alt="" style={{maxWidth:'2.5rem', margin: '1rem auto'}} src={responsive} />
                    {/* <p style={{fontWeight:'200'}}>Responsive web design</p> */}
                </div>
                <div className="skill">
                    <img alt="" style={{maxWidth:'2.5rem', margin: '1rem auto'}} src={firebase} />
                    {/* <p style={{fontWeight:'200'}}>Firebase</p> */}
                </div>
                <div className="skill">
                    <img alt="" style={{maxWidth:'2.5rem', margin: '1rem auto'}} src={api} />
                    {/* <p style={{fontWeight:'200'}}>API integration</p> */}
                </div>
                <div className="skill">
                    <img alt="" style={{maxWidth:'2.5rem', margin: '1rem auto'}} src={git} />
                    {/* <p style={{fontWeight:'200'}}>Git</p> */}
                </div>
                <div className="skill">
                    <img alt="" style={{maxWidth:'2.5rem', margin: '1rem auto'}} src={npm} />
                    {/* <p style={{fontWeight:'200'}}>NPM</p> */}
                </div>

            </div>
        </div>
    );
};

export default Skills;