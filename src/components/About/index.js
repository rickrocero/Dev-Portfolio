import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Grid } from '@material-ui/core'

import * as aboutStyles from './index.module.scss'

const About = () => {
    return (
        <section>
            <div className={aboutStyles.contact}>
                <h2>About me</h2>
                <ul>
                    <li>Resume &nbsp; | &nbsp;</li>
                    <li>rickrocero@gmail.com &nbsp; | &nbsp;</li>
                    <li>360.724.8730</li>
                </ul>
            </div>
            <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
                <Grid item xs={12} md={6}>
                    <StaticImage
                        src="../../../static/headshot.jpg"
                        alt="headshot"
                        width={300}
                        height={300}
                        objectFit="scale-down"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <p>I'm a certified full-stack developer based in beautiful Bellingham,
                    Washington. Each day I bring my persistant desire to learn, passion
                    for coding, and the goal of improving the well-being of others through
                    my work, to engineer captivating web applications. I focus on a mobile-first 
                    frontend design including a robust backend and a scalabale database.
                    <br/>
                    <br/>
                    I've earned a B.S. degree in cell &#38; molecular biology from Western 
                    Washington University. During my senior year I worked on data analysis and
                    visualization using R and it is when I realized my deep appreciation for 
                    programming. I decided to not pursue medical school and instead carved a 
                    new path for myself in the tech industry as a web developer. 
                    <br/>
                    <br/>
                    Working collaboratively. Creativity and critical thinking. Problem solving.  
                    Improving the lives of your customers. These are skills I've honed as a STEM 
                    major, healthcare provider, and now as a developer. There is still a lot
                    more for me to learn and that's truly exciting. I look forward to joining a company
                    where I can grow professionally and personally while working alongside other 
                    ambitious people to deliver high-quality, innovative applications.</p>
                </Grid>
            </Grid>
        </section>
    )
}

export default About