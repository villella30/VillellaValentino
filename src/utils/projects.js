import SportsSoccerSharpIcon from '@mui/icons-material/SportsSoccerSharp';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SettingsIcon from '@mui/icons-material/Settings';
import SvgReact from "../images/React.svg";
import PngJavaScript from '../images/JS.png';
import SvgFB from "../images/FB.svg";
import SvgHtml from '../images/HTML.svg';
import SvgCss from '../images/CSS.svg';
import ProjectOne from "../images/ProjectOne.png";
import ProjectTwo from "../images/ProjectTwo.png";
import Ecommerce from '../images/Ecommerce.png';
import SvgNode from '../images/NODE.svg';
import SvgNext from '../images/SvgNext.svg'


export const projectsData = [
    {
        title: "Futbol Match",
        date: "Noviembre 2023 - Sin terminar",
        image: ProjectOne,
        description: "Esta es una aplicación creada con React-Native. Se basa en una aplicación para organizar partidos de fútbol mediante publicaciones realizadas por un usuario.",
        githubLink: 'https://github.com/villella30/Futbol-Match1',
        avatar: <SportsSoccerSharpIcon />,
        language1: "REACT NATIVE",
        language2: "JAVASCRIPT",
        language3: "FIREBASE",
        icons: {
            react: SvgReact,
            javascript: PngJavaScript,
            firebase: SvgFB,
        },
    },
    {
        title: "AreaMovil",
        date: "Octubre 2022 - Diciembre 2022",
        image: ProjectTwo,
        description: "Esta es una página web dedicada a proporcionar información sobre ventas de productos para motores automáticos, así como servicios de reparación e instalación de los mismos.",
        githubLink: 'https://github.com/villella30/Areamovil.github.io',
        pageLink: "https://villella30.github.io/Areamovil.github.io/",
        avatar: <SettingsIcon />,
        language1: "HTML",
        language2: "CSS",
        language3: "JAVASCRIPT",
        icons: {
            react: SvgHtml,
            javascript: SvgCss,
            firebase: PngJavaScript,
        },
    },
    {
        title: "Sportwear",
        date: "Marzo 2024 - En proceso",
        image: Ecommerce,
        description: "Proyecto de Web E-commerce sobre venta de ropa deportiva, incluido con pasarela de pago, barra de busqueda, filtro de busqueda y muchas cosas más!",
        githubLink: 'https://github.com/villella30/Sport-Clothes',
        avatar: <SportsBasketballIcon />,
        language2: "NEXT",
        language3: "NODE",
        language1: "REACT",
        icons: {
            react: SvgReact,
            javascript: SvgNode,
            firebase: SvgNext,
        },
    },
    
];