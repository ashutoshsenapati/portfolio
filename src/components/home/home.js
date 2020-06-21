import React from "react";
import './home.css'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="homeContainer">

            <div className="primary">
                <p className="titleName">ତୁମର<br /> <span className="coloured">MathTrix !</span></p>
                <p className="infoText">In Excellence, We Believe </p>
                <Link to="/about">
                    <input type="button" className="primaryBtn" value="Learn More"/>
                </Link>
            </div>

            <div className="secondary">
                <div className="avatarImg">
                    <img width="100%" src='/assets/images/me.jpg' alt="thiva" />
                </div>
                <div align="center" className="socialbtns">
                <ul>
                <li>
                <a href="https://twitter.com/ashutoshse1" class="fa fa-lg fa-twitter" target="_blank"></a>
                </li>
                <li>
                <a href="https://github.com/ashutoshsenapati" class="fa fa-lg fa-github" target="_blank"></a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/ashutoshsenapati/" class="fa fa-lg fa-linkedin" target="_blank"></a>
                </li>
                <li>
                <a href="https://www.instagram.com/ashutosh_5enapati/?hl=en" class="fa fa-lg fa-instagram" target="_blank"></a>
                </li>
                </ul>
                </div>
            </div>

        </div>                
    );
}

export default Home;