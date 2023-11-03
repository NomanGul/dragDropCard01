import { useState } from "react";
import { Linkedin02Icon } from "./hugeicons/Stroke";
import { NewTwitterIcon } from "./hugeicons/Stroke";
import { GithubIcon } from "./hugeicons/Stroke";
import Sortable from 'sortablejs';
import masoomImg from "./assets/masoombahi.jpg";
import nomanImg from "./assets/nomangul.jpg";
import alexImg from "./assets/alex.jpg";
import jamesImg from "./assets/james.jpg";


import "./App.css";

function App() {
  
  return (
    <>
      <div id="team-members">
        <article className="team-member">
          <img
            className="team-member-avatar"
            src={nomanImg}
            alt="James Alexander"
          />
          <div className="team-member-name">
            <h3>Noman Gul</h3>
            <p>Full-Stack Developer</p>
          </div>
          <ul className="social-links">
            <li>
              <a href="https://www.linkedin.com/in/noman-gul/" target="_blank">
               
                <Linkedin02Icon/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/NomanGulKhan" target="_blank">
               
                <NewTwitterIcon/>
              </a>
            </li>
            <li>
              <a href="https://github.com/NomanGul"  target="_blank">
              
                <GithubIcon />
              </a>
            </li>
          </ul>
        </article>
        <article className="team-member">
          <img
            className="team-member-avatar"
            src={masoomImg}
            alt="Lilia Williams"
          />
          <div className="team-member-name">
            <h3>Masum Parvej</h3>
            <p>UX/UI Designer</p>
          </div>
          <ul className="social-links">
            <li>
              <a href="https://www.linkedin.com/in/masum-parvej/" target="_blank">
              
                <Linkedin02Icon/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/masumparvej_" target="_blank">
               
                <NewTwitterIcon/>
              </a>
            </li>
            <li>
              <a href="https://github.com/halal-lab" target="_blank">
         
                <GithubIcon />
              </a>
            </li>
          </ul>
        </article>
        <article className="team-member">
          <img className="team-member-avatar" src={alexImg} alt="Alexander Smith" />
          <div className="team-member-name">
            <h3>Alexander Smith</h3>
            <p>Product Manager</p>
          </div>
          <ul className="social-links">
            <li>
              <a href="#">
                {/* <img src="assets/linkedin.svg" alt="Linkedin" /> */}
                <Linkedin02Icon/>
              </a>
            </li>
            <li>
              <a href="#">
                {/* <img src="assets/x.svg" alt="X" /> */}
                <NewTwitterIcon/>
              </a>
            </li>
          </ul>
        </article>
        <article className="team-member">
          <img className="team-member-avatar" src={jamesImg} alt="Melissa Taylor" />
          <div className="team-member-name">
            <h3>Melissa Taylor</h3>
            <p>Data Science</p>
          </div>
          <ul className="social-links">
            <li>
              <a href="#">
                {/* <img src="assets/linkedin.svg" alt="Linkedin" /> */}
                <Linkedin02Icon/>
              </a>
            </li>
            <li>
              <a href="#">
                {/* <img src="assets/x.svg" alt="X" /> */}
                <NewTwitterIcon/>
              </a>
            </li>
            <li>
              <a href="#">
                {/* <img src="assets/github.svg" alt="GitHub" /> */}
                <GithubIcon />
              </a>
            </li>
          </ul>
        </article>
      </div>
    </>
  );
}

export default App;
