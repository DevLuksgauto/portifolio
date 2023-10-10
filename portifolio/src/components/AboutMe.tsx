import { useSelector } from 'react-redux';
import classes from '../css/AboutMe.module.css';
import { RootState } from '../reducers';
import separator from '../assets/separatorBlack 1.png'

import developmentPic from '../assets/development.png';
import maintenancePic from '../assets/maintenance.png';
import communicationPic from '../assets/communication.png';
import { MouseEventHandler } from 'react';

const AboutMe: React.FC = () => {

    const data = useSelector((state: RootState) => state.data.data);
    const lang = useSelector((state: RootState) => state.language.changeLanguage);

    const handleGoTO: MouseEventHandler<HTMLButtonElement> = ()=> {
        const targetElement = document.getElementById('explore');
        if(targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return(
        <div id='aboutme' className={classes.container}>
            <h1 className={classes.aboutme}>{data[lang]?.aboutme.toUpperCase()}</h1>
            <p className={classes.description}>{data[lang]?.description}</p>
            <button id='explore' onClick={handleGoTO} className={classes.exploreBtn}>EXPLORE</button>
            <img className={classes.img} src={separator} alt="Separador de página" />
            <div className={classes.subtitlesContainer}>
                <div className={classes.subContainer}>
                    <div className={classes.titleContainer}>
                        <img className={classes.titlePics} src={developmentPic} alt="imagem alusiva a criação de app"/>
                        <h2 className={classes.developmentH2}>{data[lang]?.development[0]}</h2>
                    </div>
                    <p className={classes.paragraph}>{data[lang]?.development[1]}</p>
                </div>
                <div className={classes.subContainer}>
                    <div className={classes.titleContainer}>
                        <img className={classes.titlePics} src={maintenancePic} alt="imagem alusiva a manutenção"/>
                        <h2 className={classes.maintenanceH2}>{data[lang]?.maintenance[0]}</h2>
                    </div>
                    <p className={classes.paragraph}>{data[lang]?.maintenance[1]}</p>
                </div>
                <div className={classes.subContainer}>
                    <div className={classes.titleContainer}>
                        <img className={classes.titlePics} src={communicationPic} alt="imagem alusiva a comunicação"/>
                        <h2 className={classes.communicationH2}>{data[lang]?.communication[0]}</h2>
                    </div>
                    <p className={classes.paragraph}>{data[lang]?.communication[1]}</p>
                </div>
            </div>
            <img className={classes.img} src={separator} alt="Separador de página" />
        </div>
    )
};

export default AboutMe;