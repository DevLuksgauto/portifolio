import { useDispatch, useSelector } from 'react-redux';
import classes from '../css/AboutMe.module.css';
import { RootState } from '../reducers';
import { useEffect } from 'react';
import { fetchData } from '../action/fetchActions';
import separator from '../assets/separatorBlack 1.png'

const AboutMe: React.FC = () => {

    const dispatch = useDispatch();
    const data = useSelector((state: RootState) => state.data.data);
    const lang = useSelector((state: RootState) => state.language.changeLanguage);
    
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return(
        <div className={classes.container}>
            <h1 className={classes.aboutme}>{data[lang]?.aboutme}</h1>
            <p className={classes.description}>{data[lang]?.description}</p>
            <button className={classes.exploreBtn}>Explore</button>
            <img className={classes.img} src={separator} alt="Separador de página" />
            <div className={classes.subtitlesContainer}>
                <div className={classes.subContainer}>
                    <h2 className={classes.developmentH2}>{data[lang]?.development[0]}</h2>
                    <p className={classes.paragraph}>{data[lang]?.development[1]}</p>
                </div>
                <div className={classes.subContainer}>
                    <h2 className={classes.maintenanceH2}>{data[lang]?.maintenance[0]}</h2>
                    <p className={classes.paragraph}>{data[lang]?.maintenance[1]}</p>
                </div>
                <div className={classes.subContainer}>
                    <h2 className={classes.communicationH2}>{data[lang]?.communication[0]}</h2>
                    <p className={classes.paragraph}>{data[lang]?.communication[1]}</p>
                </div>
            </div>
            <img className={classes.img} src={separator} alt="Separador de página" />
        </div>
    )
};

export default AboutMe;