import React from "react";
import "./about.css";
import { Link } from "react-router-dom";

const skills = [
    {
        "type": "Overall Assessment",
        "level": 80
    },
    {
        "type": "Statistics",
        "level": 70
    },
    {
        "type": "Calculus",
        "level": 60
    },
    {
        "type": "Time and Distance",
        "level": 60
    },
    {
        "type": "Algenra",
        "level": 70
    },
    {
        "type": "Trigonometry",
        "level": 70
    }
]

function About() {
  return (
    <div className="aboutContainer">
      <div className="primaryAbt">
        <p className="titleText">About Us</p>
        <p className="paraText">
        MAthtrix is an ed-tech company which intends to be India’s most loved school learning app that offers 
        personalized learning of Mathematics concepts to students, suited to their learning style and speed. 
        Learning programs from MAthtrix are available for students of different levels and competitive exams
        <p>This app helps students understand concepts thoroughly through movie-like lessons, regular tests, real live examples and practice sessions. 
        Delivering a world-class learning experience, programs from MAthtrix is making students fall in love with learning and become self-initiated learners.</p>
        </p>
        <Link to="/contact">
          <input type="button" className="primaryBtn" value="Contact Us" />
        </Link>
      </div>

      <div className="secondaryAbt">
        <div class="u-center">
          <section class="skills">
            {
                skills.map((skill, i) => {
                    return(
                        <div class="skill">
                            <h3 class="skill__type">{skill.type}</h3>
                            <div class="skill__outer-bar">
                                <div style={{width: `${skill.level}%`}} class="skill__inner-bar"></div>
                            </div>
                        </div>
                    );
                })
            }

          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
