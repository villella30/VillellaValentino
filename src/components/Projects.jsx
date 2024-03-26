import * as React from 'react';
import "../styles/Projects.css"
import { styled } from '@mui/material/styles';
import { Grid, Typography, Card, CardContent, Button } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { projectsData } from '../utils/projects.js';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const iconStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: "auto auto",
    padding: "2px",
    color: "white"
};



export default function Projects() {
    const [expanded, setExpanded] = React.useState({});

    const handleExpandClick = (index) => {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [index]: !prevExpanded[index],
        }));
    };

    return (
        <div id="projects" className='projects-container'>
            <h1 className='title1' style={{ textAlign: "center" }}>
                Proyectos
            </h1>
            <Grid container spacing={2} justifyContent="center" >
                {projectsData.map((project, index) => (
                    <Grid item key={index}>
                        <Card style={{ backgroundColor: "#060c13", color: "white", borderRadius: "15px" }} sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar style={{ backgroundColor: '#32475b' }}>
                                        {project.avatar}
                                    </Avatar>
                                }
                                title={project.title}
                                subheader={<span style={{ color: "white" }}>{project.date}</span>}
                            />
                            <CardMedia
                                component="img"
                                height="200"
                                image={project.image}
                                alt={project.title}
                            />
                            <CardContent>
                                <Typography variant="body2" color="white">
                                    {project.description}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <a href={project.githubLink} target='_blank'>
                                    <Button variant="contained" style={{ backgroundColor: '#32475b', color: 'white', marginRight: "30px", borderRadius: "10px" }}>
                                        Ver codigo
                                    </Button>
                                </a>
                                {project.pageLink ? (
                                    <a href={project.pageLink} target='_blank'>
                                        <Button variant="contained" style={{ backgroundColor: '#32475b', color: 'white', borderRadius: "10px" }}>
                                            Visitar
                                        </Button>
                                    </a>
                                ) : null}
                                <ExpandMore
                                    expand={expanded[index]}
                                    onClick={() => handleExpandClick(index)}
                                    aria-expanded={expanded[index]}
                                    aria-label="show more"
                                    style={{ color: "white", backgroundColor: "#32475b" }}
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Grid container spacing={2} >
                                        <Grid item>
                                            <Typography sx={iconStyle} >
                                                <img className="icon-img" src={project.icons.react} alt="ReactNative" />
                                            </Typography>
                                            <Typography variant="subtitle2" color="white" align="center">
                                                {project.language1}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography sx={iconStyle}>
                                                <img className="icon-img" src={project.icons.javascript} alt="JavaScript" />
                                            </Typography>
                                            <Typography variant="subtitle2" color="white" align="center">
                                                {project.language2}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography sx={iconStyle} className="icon">
                                                <img className="icon-img" src={project.icons.firebase} alt="FireBase" />
                                            </Typography>
                                            <Typography variant="subtitle2" color="white" align="center">
                                                {project.language3}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
