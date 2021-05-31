import React from 'react'
import '../styles/jobs.css'
import WorkIcon from '@material-ui/icons/Work';
import {Button} from "reactstrap";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PaymentIcon from '@material-ui/icons/Payment';
import SearchIcon from '@material-ui/icons/Search';

export const Jobs = () => {
    return (
        <div className="container p-5">
            <div>
                <div>
                    <h2>Job Category : Developer</h2>
                </div>
                <div>
                    <p>Code > Jobs > Developer</p>
                </div>

            </div>

            <div className="searchParent">
                <div>
                    <form class="example" action="">
                    <input type="text" placeholder="Enter Keyword" />
                    <button  type="submit"><SearchIcon/></button>
                    </form>
                    
                </div>
            </div>

            <div className="tableParent">
                <table class="table tableStart">
                    <tbody>
                        <tr className="tableRow">
                            <td className="row">
                                <div>
                                    <div className="post">
                                        <h5> <WorkIcon/> Web Development</h5>
                                    </div>
                                    <div className="subHeading">
                                    <p>Technical</p>
                                    <p><LocationOnIcon style={{color:'#ec7c2d'}}/> Lucknow, U.P</p>
                                    <p><PaymentIcon style={{color:'#ec7c2d'}}/> 2000-4000/ month</p>
                                    </div>
                                    <div className="apply">
                                        <p>INTERNSHIP</p>
                                        <button className="  applyButton">Apply</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="tableRow">
                            <td className="row">
                                <div>
                                    <div className="post">
                                        <h5> <WorkIcon/> Content Writer</h5>
                                    </div>
                                    <div className="subHeading">
                                    <p>Technical</p>
                                    <p><LocationOnIcon style={{color:'#ec7c2d'}}/> Noida, U.P</p>
                                    <p><PaymentIcon style={{color:'#ec7c2d'}}/> 2000-4000/ month</p>
                                    </div>
                                    <div className="apply">
                                        <p>FULL TIME</p>
                                        <button className="  applyButton">Apply</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="tableRow">
                            <td className="row">
                                <div>
                                    <div className="post">
                                        <h5> <WorkIcon/> Graphic Desiner</h5>
                                    </div>
                                    <div className="subHeading">
                                    <p>Technical</p>
                                    <p><LocationOnIcon style={{color:'#ec7c2d'}}/> Noida, U.P</p>
                                    <p><PaymentIcon style={{color:'#ec7c2d'}}/> 2000-4000/ month</p>
                                    </div>
                                    <div className="apply">
                                        <p>PART TIME</p>
                                        <button className="  applyButton">Apply</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        
                         
                    </tbody>
                </table>
            </div>

        </div>
    )
}
