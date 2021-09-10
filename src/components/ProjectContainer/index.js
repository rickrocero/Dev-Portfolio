import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Grid } from '@material-ui/core'

import ProjectCard from '../ProjectCard'
import './index.scss'

const ProjectContainer = () => {

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
            >
            {projectData.site.siteMetadata.projects.map(projectObj => <ProjectCard project={projectObj} keys={projectData.site.siteMetadata.projects.title} />)}
            </Grid>
        </section>
        </>
    )
}

export default ProjectContainer