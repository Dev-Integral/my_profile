import React, { Component } from 'react';
import aboutImage from '../images/about_image.jpg';

class About extends Component {
    render() {
        return (
            <div>
                <div className="slide" id="2">
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
                                        <div className="main-btn">
                                            <a href="https://www.linkedin.com/in/taiwo-ayoola-39439012a" rel="noopener noreferrer" target="_blank">
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
}

export default About;