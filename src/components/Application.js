import React from 'react'
import '../styles/application.css'
 

export const Application = () => {
    return (
        <div >
            <div  className="applicationFormHeading">
            <h1>Application Form</h1>
            </div>
           
            <div className="leftDiv">
            
                    <div className="container">
                        <form action="/  ">
                            <div className="rowForm">
                                <div >
                                <label for="fname" >Full Name</label>
                                <input type="text"   name="fullname" placeholder="Your name.." required />
                                </div>

                                <div  >
                                <label for="mobile">Mobile Number</label>
                            <input type="number"  name="mobile" placeholder="Mobile Number.." required/>

                                </div>
   
                            </div>
                         

                            <label for="email">Email</label>
                            <input type="email"  name="email" placeholder="Email.." required/>

                            <label for="job">Job Title</label>
                            <select name="jobs" >
                                <option value="" selected>Select Job Title</option>
                                <option value="webdeveloper">Web Developer</option>
                                <option value="contentwriter">Content Writer</option>
                                <option value="androiddeveloper">Android Developer</option>
                            </select>
                             

                            <label for="file">Resume</label>
                            <input type="file"  name="resume"  required />


                            <label for="subject">Write Your Messgage to Recruiter</label>
                            <textarea id="subject" name="subject" placeholder="Write something.."  style={{height:'150px'}}></textarea>

                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                
            </div>

        </div>
    )
}
