import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import resume from '../../../static/resume.pdf'
import './index.scss'
import "@fontsource/quicksand"

const resumeUrl = `${resume}#navpanes=0&scrollbar=0`

const About = () => {
    return (
        <section id="about" className="about">
            <div className="contact">
                <h2>About</h2>
                <ul>
                    <li> <a href={resumeUrl} download="Rick's Resume">Resume</a> <span className="spacer">&nbsp; | &nbsp;</span></li>
                    <li> <a href="mailto:rickrocero@gmail.com">rickrocero@gmail.com</a> <span className="spacer">&nbsp; | &nbsp;</span></li>
                    <li> <a href="tel:+13607248730">360.724.8730</a></li>
                </ul>
            </div>
            <div className="bio">
                <figure>
                    <StaticImage
                    className="headshot" 
                    src="../../../static/headshot.jpg"
                    alt='Selfie' 
                    loading='lazy'
                    />
                </figure>
                <figcaption>
                    <h3 className='titleSpacing'>My story</h3>
                    <p> 
                        I'm a Certified Full-Stack Developer based in beautiful Bellingham,
                        Washington. Each day I bring my persistant desire to learn, passion
                        for coding, and the goal to improve the well-being of others through my work. I focus on a mobile-responsive 
                        frontend design, a robust backend, and a scalabale database.
                    </p>
                    <br />
                    <p>
                        I've earned a B.S. degree in cell &#38; molecular biology from Western 
                        Washington University. During my senior year I worked on data analysis and
                        visualization using R and I realized my deep appreciation for 
                        programming. I pivoted from medicine and carved a 
                        new path as a programmer.
                    </p>
                    <br />
                    <p> 
                        Collaborative teamwork. Creative problem-solving.  
                        Improving the lives of the customers. These are skills I've honed as a STEM 
                        major, healthcare provider, and now as a developer. There is still
                        more for me to learn and that's truly exciting. I'd like to join a company
                        where I can grow professionally and personally while working alongside
                        ambitious people to deliver high-quality, innovative products.
                    </p>
                    <br />
                    <h3 className='titleSpacing'>Connect with me</h3>
                    <p>
                        Please reach out for professional opportunities. Thank you for passing by!
                    </p>
                </figcaption>
            </div>
        </section>
    )
}

export default About