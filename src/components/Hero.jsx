import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Yo from "../images/MyPhoto.jpg"
import "../styles/Hero.css"
import { Button, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Hero(props) {
    return (
        <div id='hero' className='hero-container'>
            <Grid
                className="hero"
                container
                spacing
                direction="row"
                justify="space-around"
                alignItems="center"
                justifyContent="center">
                <Grid Item xs={12} sm={6} md={6} lg={6} >
                    <img src={Yo} width="100%" className='hero-img'/>
                </Grid>
                <Grid Item xs={12} sm={6} md={6} lg={6}>
                    <Grid container direction="column" alignItems="center" spacing={4}>

                        <Grid Item xs ><Typography sx={{ fontSize: "2rem" }} color="white" variant='h3' align='center'>
                            Hola, soy Valentino Villella
                        </Typography></Grid>

                        <Grid Item xs><Typography color="white" variant='h5' align='center'>
                            Front-end Developer
                        </Typography></Grid>
                        <Grid Item xs><Typography color="white" variant='body1' align='center'>
                        Soy un apasionado desarrollador web frontend y móvil, comprometido con la creación de experiencias digitales innovadoras. Mi enfoque va más allá de la simple codificación; busco constantemente nuevas formas de mejorar la usabilidad y la accesibilidad en mis proyectos. </Typography></Grid>
                    </Grid>
                    <Grid item container direction="row" justifyContent="center" spacing={4}>
                        <Grid item>
                            <a href='https://github.com/villella30' target='_blank'>
                                <Button variant="contained" style={{ backgroundColor: '#3e4144', color: 'white' }} className='buttons'>
                                    <GitHubIcon className='icon' />
                                    Valentino Villella
                                </Button>
                            </a>

                        </Grid>
                        <Grid item>
                            <a href='https://www.linkedin.com/in/villella30/' target='_blank'>
                                <Button variant='contained' style={{ backgroundColor: '#0A66C2', color: 'white' }}>
                                    <LinkedInIcon className='icon' />
                                    Valentino Villella
                                </Button>
                            </a>

                        </Grid>
                    </Grid>
                </Grid>

            </Grid >
        </div>
    );
}
