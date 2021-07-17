import React from 'react' 
import { 
    Grid, 
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button
} 
from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as cardStyles from './index.scss'

const useStyles = makeStyles({
    root: {
      width: 600,
      height: 600
    },
    // media: {
    //   objectFit: "scale-down"
    // }
  });

const ProjectCard = ({ project }) => {
    const classes = useStyles();
    return (
        <Grid item xs={6} className={classes.root}>
            <a>
                <img src={project.img} alt={project.title}/>
            </a>
            <h3>{project.title}</h3>
            <figcaption>{project.description}</figcaption>
            <button>Github</button> <button>Website</button>
            
            {/* <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    component="img"
                    image={project.img}
                    alt={project.title}
                />
                <CardContent>
                    <h3>{project.title}</h3>
                    <figcaption>{project.description}</figcaption>
                </CardContent>
                <CardActions>
                    <Button href={project.github} target="_blank" size="small" color="primary">
                        Github
                    </Button>
                    <Button href={project.link} target="_blank" size="small" color="primary">
                        Website
                    </Button>
                </CardActions>
            </Card> */}
        </Grid>
    )
}

export default ProjectCard