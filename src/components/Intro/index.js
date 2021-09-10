import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Button } from '@material-ui/core'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { borders } from '@material-ui/system';
// import "@fontsource/quicksand/700.css"

// import ParticleBG from '../Particle';
// import * as introStyles from './intro.module.scss'
import './index.scss'

import Navbar from '../Navbar'
import Particles from 'react-particles-js';
import particlesConfig from '../Particle/particlesConfig.json';
import particlesConfig2 from '../Particle/particlesConfig2.json';
import { withStyles } from '@material-ui/core/styles';
import { IntroButton } from './introElements'
import { clamp } from 'tsparticles/Utils';

const IntroBtn = withStyles({
    root: {
    //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    //   background: '#D01110',
    background: 'transparent',
    //   borderRadius: 3,
    //   border: 0,
    //   color: '#fff',
    color: '#D01110',
    borderColor: '#D01110',
    //   height: 48,
      fontSize: '1.25rem',
    //   padding: '0 30px',
    transition: "background 300ms, color 300ms",
      '&:hover': {
        backgroundColor: '#D01110',
        // boxShadow: '0 0 5px 3px rgba(238, 47, 111, 0.8)',
        color: '#fff',
      }
    },
})(Button);


const Intro = () => {

    return (
        <>
        <section className="intro">
        <Particles params={particlesConfig2} className="bg"/>
            {/* <Navbar /> */}
            <div className="greeting">
                {/* <figure className="diamond"> */}
                    <StaticImage 
                    src="../../../static/Avatar2.png"
                    className="avatar"
                    />
                {/* </figure> */}
                <div>
                    <h1>Hello and welcome! I'm <span className="highlight">Rick Rocero</span>.</h1>
                    <h3>A <span className="highlight">Full-Stack Developer</span> based in Bellingham, WA.</h3>
                </div>
                <AnchorLink 
                to='/#projects'
                >
                    {/* <IntroButton>&#60; View Portfolio  &#47;&#62;</IntroButton> */}
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