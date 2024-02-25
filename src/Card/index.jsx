import React from "react";
import "./index.css";
import emoji from "../assets/Emoji.svg";
import sun from '../assets/sun.svg'
import moon from '../assets/moon.svg'
import rightimg from '../assets/rightimg.svg'

function Card() {
    return (
        <div className="container">
            <header>
                <nav>
                    <li>
                        <a href="#">About Me</a>
                    </li>
                    <li>
                        <a href="#">Skills</a>
                    </li>
                    <li>
                        <a href="#">Project</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </nav>
                <select>
                    <option value="uzb">uzb</option>
                    <option value="eng">eng</option>
                    <option value="rus">rus</option>
                </select>
                <div className="mode">
                    Light Mode <span><img src={sun} alt="" /></span>
                </div>
            </header>
            <div className="content">
                <div className="left">
                    <h1>
                        Hi <img src={emoji} alt="" />, <br />I’m Charles,<br />Front-end Developer
                    </h1>
                    <p>
                        I design and develop experiences that make people’s lives simpler
                        through Web and Mobile apps.I work with FIgma , HTML5, CSS3,
                        JavaScript, React, ReactNative and Flutter.
                    </p>
                    <div className="buttons">
                        <button className="btn1">HIRE ME</button>
                        <button className="btn2">SEE MY PROJECTS</button>
                    </div>
                </div>
                <div>
                    <img src={rightimg} alt="" />
                </div>
            </div>

        </div>
    );
}

export default Card;
