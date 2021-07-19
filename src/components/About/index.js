import * as React from 'react'

import * as aboutStyles from './index.module.scss'

const About = () => {
    return (
        <section className={aboutStyles.wrapper}>
            <h2>About me</h2>
            <h4>Resume | rickrocero@gmail.com | 360.724.8730</h4>
            <p>I'm a JavaScript Developer currently living in beautiful Bellingham, Washington.</p>
        </section>
    )
}

export default About