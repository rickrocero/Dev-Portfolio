import React from 'react' 
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as cardStyles from './index.module.scss'

const useStyles = makeStyles({
    div: {
        direction: "row",
    }
});

const ProjectCard = ({ project }) => {
    const classes = useStyles();
    return (
        <Grid 
        item xs={12} md={6} 
        className={cardStyles.project}
        >
            <a>
                <img src={project.img} alt={project.title}/>
            </a>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={classes.div}>
                <a href={project.github} target="_blank">
                    <button>Github</button>
                </a>
                <a href={project.link} target="_blank">
                    <button>Website</button>
                </a> 
            </div>
            
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