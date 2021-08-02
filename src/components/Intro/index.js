import * as React from 'react'
import { StaticImage, staticImage } from 'gatsby-plugin-image'
import { Button } from '@material-ui/core'
import scrollTo from 'gatsby-plugin-smoothscroll'

// import ParticleBG from '../Particle';
// import * as introStyles from './intro.module.scss'
import './index.scss'

import Particles from 'react-particles-js';
import particlesConfig from '../Particle/particlesConfig.json';



const Intro = () => {
    return (
        <section className="intro">
            <Particles params={particlesConfig} className="bg"/>
            <div className="greeting">
                    <div>
                        <h1>Hi, I'm Rick.<br/>As a JavaScript Developer,<br/>I design and build intuitive full-stack web apps.</h1>
                    </div>
                    <Button size="medium" variant="outlined" onClick={() => scrollTo('.projects')}>
                        &#60; View Portfolio  &#47;&#62;
                    </Button>
            </div>
        </section>
       
        
    )
}

export default Intro