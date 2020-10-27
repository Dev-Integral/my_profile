import React, { Component } from 'react';

//import projects images
import naija from '../images/projects/9ja-small.png';
import naijaBig from '../images/projects/9ja-big.png';
import calculator from '../images/projects/calc-small.png';
import calculatorBig from '../images/projects/calc-big.png';
import clock from '../images/projects/clock-small.png';
import clockBig from '../images/projects/clock-big.png';
import portfolio from '../images/projects/portfolio-small.png';
import portfolioBig from '../images/projects/portfolio-big.png';
import miniflix from '../images/projects/miniflix-small.png';
import miniflixBig from '../images/projects/miniflix-big.png';
import scBig from '../images/projects/sc-big.png';
import sc from '../images/projects/sc-small.png';

const projects = [
  { image: naija, bigger: naijaBig, title: 'Webpage for Nigeria', paragraph: 'Out of love for Nigeria, depicting her beauty in terms of culture and diversity - Built using HTML, CSS and JS.', link: 'https://lovefornaija.netlify.app/' },
  { image: calculator, bigger: calculatorBig, title: 'clock design', paragraph: 'A calculator for basic arithmetics - Designed using React', link: 'https://react-4calculator.netlify.app' },
  { image: clock, bigger: clockBig, title: 'Javascript Clock', paragraph: 'A clock page designed using react', link: 'https://integral-clock.netlify.app' },
  { image: portfolio, bigger: portfolioBig, title: 'My Portfolio', paragraph: 'Portfolio page - Built using react, bootstrap and formspree ', link: 'https://dev-integral.github.io/my_profile/' },
  { image: miniflix, bigger: miniflixBig, title: 'Miniflix', paragraph: 'A Website designed to mock Netflix - Built using Angular framework.', link: 'https://integral-miniflix.netlify.com' },
  { image: sc, bigger: scBig, title: 'Soul-connect', paragraph: 'A social dating application - Built using angular framework', link: 'https://soul-connect.netlify.app' },

]
class Projects extends Component {
  render() {
    return (
      <div className="slide" id="4">
        <div className="content fourth-content">
          <div className="container-fluid">
            <div className="row">
              <div><h2>projects</h2></div>
              {projects.map((project, i) => {
                return (
                  <div className="col-md-4 col-sm-6" {...project} key={i}>
                    <div className="item">
                      <div className="thumb">
                        <a href={project.bigger} data-lightbox="image-1">
                          <div className="hover-effect">
                            <div className="hover-content">
                              <h2>{project.title}</h2>
                              <p>{project.paragraph}</p>
                            </div>
                          </div>
                        </a>
                        <div className="image">
                          <img src={project.image} alt="" />
                        </div>
                      </div>
                      <div className="projectSlide"><a href={project.link} rel="noopener noreferrer" target="_blank">View Website<i className='fa fa-likedin'></i></a></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;