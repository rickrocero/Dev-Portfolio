import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Grid } from '@material-ui/core'

import resume from '../../../static/resume.pdf'
import * as aboutStyles from './index.module.scss'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    wrapper: {
        paddingLeft:"200px",
        paddingRight:"200px",
        paddingTop: "50px"
    },
    headshot: {
        height: "400px",
        width: "100%",
        // paddingLeft:"100px"
    }
  });

const resumeUrl = `${resume}#navpanes=0&scrollbar=0`

const About = () => {
    const classes = useStyles();

    return (
        <section>
            <div className={aboutStyles.contact}>
                <h2>About me</h2>
                <ul>
                    <li> <a href={resumeUrl} download="Rick's Resume">Resume</a> &nbsp; | &nbsp;</li>
                    <li> <a href="mailto:rickrocero@gmail.com">rickrocero@gmail.com</a> &nbsp; | &nbsp;</li>
                    <li> <a href="tel:+13607248730">360.724.8730</a></li>
                </ul>
            </div>
            <div className={aboutStyles.about}>
                <figure>
                    <StaticImage 
                    src="../../../static/headshot.jpg" 
                    layout="fixed"
                    width={400}
                    height={400}/>
                </figure>
                <figcaption>
                    <p>I'm a certified full-stack developer based in beautiful Bellingham,
                        Washington. Each day I bring my persistant desire to learn, passion
                        for coding, and the goal of improving the well-being of others through
                        my work, to engineer captivating web applications. I focus on a mobile-first 
                        frontend design alongside a robust backend and a scalabale database.
                        <br/>
                        <br/>
                        I've earned a B.S. degree in cell &#38; molecular biology from Western 
                        Washington University. During my senior year I worked on data analysis and
                        visualization using R and it is when I realized my deep appreciation for 
                        programming. I decided to not pursue medical school and carved a 
                        new path for myself in the tech industry as a programmer. 
                        <br/>
                        <br/>
                        Working collaboratively. Creativity and critical thinking. Problem solving.  
                        Improving the lives of your customers. These are skills I've honed as a STEM 
                        major, healthcare provider, and now as a developer. There is still
                        more for me to learn and that's truly exciting. I'd like to join a company
                        where I can grow professionally and personally while working alongside other 
                        ambitious people to deliver high-quality, innovative products.
                        <br/>
                        <br/>
                        Thanks a bunch for stopping by! Please reach out for professional opportunities. You can
                        find me on <a href="https://www.linkedin.com/in/rick-rocero/" target="_blank">Linkedin</a> and <a href="https://github.com/rickrocero" target="_blank">Github</a>.
                        </p>
                    </figcaption>
            </div>
            {/* <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            className={classes.wrapper}
            >
                <Grid item xs={12} md={6}>
                    <StaticImage
                        src="../../../static/headshot.jpg"
                        alt="headshot"
                        objectFit="contain"
                        className={classes.headshot}
                    />
                </Grid>
                <Grid item xs={12} md={6} className={aboutStyles.bio}>
                    <p>I'm a certified full-stack developer based in beautiful Bellingham,
                    Washington. Each day I bring my persistant desire to learn, passion
                    for coding, and the goal of improving the well-being of others through
                    my work, to engineer captivating web applications. I focus on a mobile-first 
                    frontend design alongside a robust backend and a scalabale database.
                    <br/>
                    <br/>
                    I've earned a B.S. degree in cell &#38; molecular biology from Western 
                    Washington University. During my senior year I worked on data analysis and
                    visualization using R and it is when I realized my deep appreciation for 
                    programming. I decided to not pursue medical school and carved a 
                    new path for myself in the tech industry as a web developer. 
                    <br/>
                    <br/>
                    Working collaboratively. Creativity and critical thinking. Problem solving.  
                    Improving the lives of your customers. These are skills I've honed as a STEM 
                    major, healthcare provider, and now as a developer. There is still a lot
                    more for me to learn and that's truly exciting. I'd like to join a company
                    where I can grow professionally and personally while working alongside other 
                    ambitious people to deliver high-quality, innovative applications.</p>
                </Grid>
            </Grid> */}
        </section>
    )
}

export default About