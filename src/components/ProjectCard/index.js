import React from 'react' 
import { Grid, Button } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import './index.scss'

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    div: {
        direction: "row",
        paddingTop: '0.5rem'
    }
}));

const GithubBtn = withStyles({
    root: {
      background: '#069390',
      border: 0,
      color: '#000',
      fontSize: '0.9em',
      transition: "background 300ms, border 300ms, borderColor 300ms, boxShadow 300ms",
      '&:hover': {
        background: 'transparent',
        boxShadow: '0 0 5px 3px #069390',
        border: 1,
        borderColor: '#069390',
      }
    },
})(Button);

const ProjectCard = ({ project, keys }) => {
    const classes = useStyles();
    return (
        <Grid 
        item xs={12} md={6} 
        className="project"
        key={keys}
        >
            {/* <a>
                <img src={project.img} alt={project.title}/>
            </a> */}
            <video autoPlay loop muted playsInline className="gif">
                <source src={project.img} type="video/mp4" />
            </video>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={classes.div}>
                <a href={project.github} target="_blank" rel="noreferrer">
                    <GithubBtn size="small" variant="outlined">Github</GithubBtn>
                </a>
            </div>
        </Grid>
    )
}

export default ProjectCard