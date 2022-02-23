import React from 'react';
import aboutImage from '../images/about_image.jpg';
// import {Link} from 'react-router-dom';

const About =()=>{
    const gotoLinkedIn =()=>{
        window.open("https://www.linkedin.com/in/taiwo-ayoola-39239012a/");
        window.location.reload(false);
    }
        return (
            <div>
                <div className="slide" id="4">
                    <div className="content second-content">
                        <div className="container-fluid">
                            <div className="col-md-6">
                                <div className="left-content">
                                    <h2>About Me</h2>
                                    <p>
                                        I am an accomplished mathematician with keen interest in blending the Art and Mathematical science 
                                        through programming.This has led me to the path of becoming a software engineer. Over time, I've 
                                        acquainted myself with cutting edge technological tools and languages. <br />
                                        More details in the file below.
                                    </p>
                                    <div>
                                        <div className="main-btn" onClick={()=> gotoLinkedIn()}>
                                            <a href='!#' >
                                                View LinkedIn profile
                                                <i className='fa fa-likedin'></i>
                                            </a>                       
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="right-image">
                                    <img src={aboutImage} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default About;