import React from 'react'
import '../styles/application.css'

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export const Application = () => {
    return (
        <div >
            <h1 className="applicationFormHeading">Application Form</h1>
            <div className="leftDiv">
                <div className="formDiv">
                    <div className="container">
                        <form action="/  ">
                            <div className="rowForm">
                            <label for="fname">Full Name</label>
                            <input type="text"   name="fullname" placeholder="Your name.." />

                            <label for="mobile">Mobile Number</label>
                            <input type="text"  name="mobile" placeholder="Mobile Number.." />

                            </div>
                         

                            <label for="email">Email</label>
                            <input type="email"  name="email" placeholder="Email.." />

                            <label for="file">Resume</label>
                            <input type="file"  name="resume"   />


                            <label for="subject">Write Your Messgage to Recruiter</label>
                            <textarea id="subject" name="subject" placeholder="Write something.."  style={{height:'150px'}}></textarea>

                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}
