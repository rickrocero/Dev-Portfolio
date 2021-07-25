import * as React from 'react'
import { StaticImage, staticImage } from 'gatsby-plugin-image'
import { Button } from '@material-ui/core'
import * as introStyles from './intro.module.scss'


const Intro = () => {
    return (
        <section className={introStyles.greeting}>
            <StaticImage 
                src=""
                alt=""
            />
            <div>
                <h1>Hi, I'm Rick.<br/>As a JavaScript Developer,<br/>I design and build intuitive full-stack web apps.</h1>
            </div>
            <Button size="medium" variant="outlined">
                &#60; View Portfolio  &#47;&#62;
            </Button>
        </section>
        
    )
}

export default Intro