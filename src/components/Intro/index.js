import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Button } from '@material-ui/core'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import './index.scss'

import Particles from 'react-particles-js';
import particlesConfig from '../Particle/particlesConfig.json';
import { withStyles } from '@material-ui/core/styles';

const IntroBtn = withStyles({
    root: {
      background: 'transparent',
      color: '#D01110',
      borderColor: '#D01110',
      fontSize: '1.25rem',
      transition: "background 300ms, color 300ms",
      '&:hover': {
        backgroundColor: '#D01110',
        color: '#fff',
      }
    },
})(Button);


const Intro = () => {

    return (
        <>
        <section className="intro">
        <Particles params={particlesConfig} className="bg"/>
            <div className="greeting">
                    <StaticImage
                    className="avatar" 
                    src="../../../static/Avatar2.png"
                    alt='Avatar'
                    loading='eager'
                    placeholder='blurred'
                    />
                <div>
                    <h1>Hello and welcome! I'm <span className="highlight">Rick Rocero</span>.</h1>
                    <h3>A <span className="highlight">Full-Stack Developer</span> based in Bellingham, WA.</h3>
                </div>
                <AnchorLink 
                to='/#projects'
                >
                    <IntroBtn size="large" variant="outlined">
                        &#60; View Portfolio  &#47;&#62;
                    </IntroBtn>
                </AnchorLink>
            </div>
        </section>
        </>
    )
}

export default Intro