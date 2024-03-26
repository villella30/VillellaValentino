import React from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import "../styles/Skills.css"
import SvgHtml from '../images/HTML.svg';
import SvgCss from '../images/CSS.svg';
import PngJavaScript from '../images/JS.png';
import SvgNode from '../images/NODE.svg';
import SvgMySql from "../images/MySql.svg"
import SvgGit from "../images/GIT.svg"
import SvgGitHub from "../images/GitHub.svg"
import SvgVsCode from "../images/VsCode.svg"
import SvgReact from "../images/React.svg"
import SvgMui from "../images/Mui.svg"
import SvgBootStrap from "../images/BS.svg"
import SvgFigma from "../images/Figma.svg"
import SvgFB from "../images/FB.svg"

const SkillCard = ({ title, icon }) => (
    <Grid className='languaje'>
        <Typography className='icon-style' >
            <img className='icon-img' src={icon} alt={title} />
        </Typography>
        <Typography variant="subtitle2" color="white" align="center">
            {title}
        </Typography>
    </Grid>
);



const FrontEnd = () => (
    <div>
        <Card className='card-style' sx={{ bgcolor: "#060c13", borderRadius: "15px" }}>
            <CardContent>
                <Grid container spacing={2} sx={{ justifyContent: "center", margin: "-8px"}}>
                    <SkillCard title="HTML" icon={SvgHtml} />
                    <SkillCard title="CSS" icon={SvgCss} />
                    <SkillCard title="JAVASCRIPT" icon={PngJavaScript} />
                    <SkillCard title="REACT" icon={SvgReact} />
                    <SkillCard title="REACT NATIVE" icon={SvgReact} />
                    <SkillCard title="MATERIAL-UI" icon={SvgMui} />
                    <SkillCard title="BOOTSTRAP" icon={SvgBootStrap} />
                    <SkillCard title="NODE JS" icon={SvgNode} />
                    {/* <SkillCard title="MYSQL" icon={SvgMySql} /> */}
                    <SkillCard title="FIREBASE" icon={SvgFB} />
                    <SkillCard title="GIT" icon={SvgGit} />
                    <SkillCard title="GITHUB" icon={SvgGitHub} />
                    {/* <SkillCard title="VSCODE" icon={SvgVsCode} /> */}
                    {/* <SkillCard title="FIGMA" icon={SvgFigma} /> */}
                </Grid>
            </CardContent>
        </Card>
    </div>
);


export default function Skills() {
    return (
        <div className='skills' id='skills'>
            <h1 className='title1' style={{ textAlign: "center"}}>
                Habilidades
            </h1>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Grid container spacing={1}>
                    <Grid container item spacing={1} justifyContent="center">
                        <FrontEnd />
                    </Grid>
                </Grid>
            </Box>
        </div>

    );
}
