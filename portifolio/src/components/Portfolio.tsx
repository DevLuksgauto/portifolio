import header from '../assets/SectionHeader.png';

import classes from '../css/Portfolio.module.css';
import Carousel from "./Carousel";

const Portfolio: React.FC = () => {


    return (
        <div id='portfolio' className={classes.container}>
            <img className={classes.header} src={header} alt="imagem de uma montanha como plano de fundo do header" />
            <Carousel/>
        </div>
    )
};

export default Portfolio;