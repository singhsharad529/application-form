import React,{useState} from "react";
 
import '../styles/nav.css';
import logo from '../assets/codelogo.png'
 
export const Nav=()=>
{

    

    return (
      <nav>
      {/* <!-- logo --> */}
      <div id="logo">
         <img src={logo} alt="code logo"/> 
      </div>
      {/* <!-- hamburger icon --> */}
      <label id="ham" for="toggle">
          <span className="slice"> </span>
          <span className="slice"> </span>
          <span className="slice"> </span>
      </label>
      <input type="checkbox" name="" id="toggle"/>
      {/* <!-- navigation menu --> */}
      <div id="menu">
          <ul className="nav">
              <li><a href="#">Home</a></li>
              <li>
                  <a href="#">Resources <img src="https://img.icons8.com/metro/26/000000/sort-down.png"/></a>
                  <div>
                      <div className="nav-column">
                          {/* <!-- <h3>Resources</h3> --> */}
                          <ul>
                              <li><a href="#"><img src="https://img.icons8.com/metro/26/000000/sort-down.png" className="elevated"/> Articles</a></li>
                              <li><a href="#"><img src="https://img.icons8.com/metro/26/000000/sort-down.png" className="elevated"/> Our Team</a></li>
                              <li><a href="#"><img src="https://img.icons8.com/metro/26/000000/sort-down.png" className="elevated"/> Club Activities</a></li>
                              <li><a href="#"><img src="https://img.icons8.com/metro/26/000000/sort-down.png" className="elevated"/> Projects</a></li>
                              <li><a href="#"><img src="https://img.icons8.com/metro/26/000000/sort-down.png" className="elevated"/> Achievements</a></li>
                              <li><a href="#"><img src="https://img.icons8.com/metro/26/000000/sort-down.png" className="elevated"/> Event Gallery</a></li>
                          </ul>
                      </div>
                  </div>
              </li>
              <li>
                  <a href="#">Actions <img src="https://img.icons8.com/metro/26/000000/sort-down.png"/></a>
                  <div>
                      <div className="nav-column">
                          <ul>
                              <li><a href="#"><img src="https://img.icons8.com/metro/26/000000/sort-down.png" className="elevated"/> Work with Us</a></li>
                              <li><a href="#"><img src="https://img.icons8.com/metro/26/000000/sort-down.png" className="elevated"/> Give Suggestions</a></li>
                              <li><a href="#"><img src="https://img.icons8.com/metro/26/000000/sort-down.png" className="elevated"/> Discussion Forum</a></li>
                              <li><a href="#"><img src="https://img.icons8.com/metro/26/000000/sort-down.png" className="elevated"/> Certificate Verification</a></li>
                              <li><a href="#"><img src="https://img.icons8.com/metro/26/000000/sort-down.png" className="elevated"/> Report a Bug ?</a></li>
                          </ul>
                      </div>
                  </div>
              </li>
              <li><a href="#">Contact Us</a></li>
          </ul>
          <ul className="cta-bar">
              <li>
                  <a href="#" className="cta cta-1">Login</a>
              </li>
              <li>
                  <a href="#" className="cta cta-2">Join Now</a>
              </li>
          </ul>
      </div>

  </nav>
    )
}

 