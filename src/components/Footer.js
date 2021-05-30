import React,{useState} from 'react'

import '../styles/footer.css'
export const Footer=()=> {

    const curDate= new Date().getFullYear();

    return (
      <div className="footer">
        <div className="prefooter">
            <div className="elevate">
                <div>                
                    <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQG3bCYltvgjoQ/company-logo_200_200/0/1602502806637?e=2159024400&v=beta&t=e9_m3djcdm2I_Z9UsrBXIUmp0uW2K3c4T2A6MBhtAbM" 
                        className="logo"
                        alt=""/>
                    <h3>Club Of DEvelopers</h3>
                    <h4>BIET Jhansi</h4>
                    <p>A Development Club founded in 2020 by BIETians</p>
                    <ul className="submenu">
                        <li>
                            <a href="mailto:code@bietjhs.ac.in" className="mail"> code@bietjhs.ac.in</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="menu-section">
                <div className="menu">
                    <h3 className="menu-head">
                        Resources
                    </h3>
                    <ul className="submenu">
                        <li className="links">
                            <a href="#">
                                <img src="https://img.icons8.com/metro/12/000000/chevron-right.png"/>
                                Our Team
                            </a>
                        </li>
                        <li className="links">
                            <a href="#">
                                <img src="https://img.icons8.com/metro/12/000000/chevron-right.png"/>
                                Club Activities
                            </a>
                        </li>
                        <li className="links">
                            <a href="#">
                                <img src="https://img.icons8.com/metro/12/000000/chevron-right.png"/>
                                Projects
                            </a>
                        </li>
                        <li className="links">
                            <a href="#">
                                <img src="https://img.icons8.com/metro/12/000000/chevron-right.png"/>
                                Achievements
                            </a>
                        </li>
                        <li className="links">
                            <a href="#">
                                <img src="https://img.icons8.com/metro/12/000000/chevron-right.png"/>
                                Blog
                            </a>
                        </li>
                        <li className="links">
                            <a href="#">
                                <img src="https://img.icons8.com/metro/12/000000/chevron-right.png"/>
                                Image Gallery
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="menu">
                    <h3 className="menu-head">
                        Actions
                    </h3>
                    <ul className="submenu">
                        <li className="links">
                            <a href="#">
                                <img src="https://img.icons8.com/metro/12/000000/chevron-right.png"/>
                                Work with Us
                            </a>
                        </li>
                        <li className="links">
                            <a href="#">
                                <img src="https://img.icons8.com/metro/12/000000/chevron-right.png"/>
                                Suggestions
                            </a>
                        </li>
                        <li className="links">
                            <a href="#">
                                <img src="https://img.icons8.com/metro/12/000000/chevron-right.png"/>
                                Discussion Forum
                            </a>
                        </li>
                        <li className="links">
                            <a href="#">
                                <img src="https://img.icons8.com/metro/12/000000/chevron-right.png"/>
                                Certificate Verification
                            </a>
                        </li>
                        <li className="links">
                            <div className="socialIcons">
                                <a href="#" className="socialIcon">
                                    <img src="https://img.icons8.com/fluent/40/000000/facebook-new.png"/>
                                </a>
                                <a href="#" className="socialIcon">
                                    <img src="https://img.icons8.com/color/40/000000/twitter-circled--v1.png"/>
                                </a>
                                <a href="#" className="socialIcon">
                                    <img src="https://img.icons8.com/fluent/40/000000/telegram-app.png"/>
                                </a>
                                <a href="#" className="socialIcon">
                                    <img src="https://img.icons8.com/fluent/40/000000/linkedin-circled.png"/>
                                </a>
                                <a href="#" className="socialIcon">
                                    <img src="https://img.icons8.com/fluent/40/000000/youtube-play.png"/>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>
                &copy; Copyright {curDate} <a href="#">Club Of DEvelopers, BIET Jhansi</a> | All Rights Reserved 
            </p>
        </div>
    </div>
    );
  }
  
 
  