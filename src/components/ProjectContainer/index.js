import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Grid } from '@material-ui/core'

import ProjectCard from '../ProjectCard'
// import * as containerStyles from './index.module.scss'
import './index.scss'
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     container: {
//         paddingLeft:"200px",
//         paddingRight:"200px",
//         backgroundColor: "#F8EEE7"
//     },
//   });

const ProjectContainer = () => {
    // const classes = useStyles();


    const projectData = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                projects {
                    title
                    description
                    img
                    github
                    link
                }
            }
        }
    }
    `)

    return (
        <>
        <section id="projects" className="projects">
            <h2>My Recent Work</h2>
            <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            // className={classes.container}
            >
            {projectData.site.siteMetadata.projects.map(projectObj => <ProjectCard project={projectObj}/>)}
            </Grid>
        </section>
        </>
    )
}

export default ProjectContainer