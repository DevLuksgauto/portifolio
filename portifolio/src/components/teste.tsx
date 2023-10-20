import classes from '../css/FirstPage.module.css';
import { MouseEventHandler, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../action/fetchActions';
import { ChangeLanguage } from '../action/actionTypes'
import { RootState } from '../reducers';
import WebFontLoader from 'webfontloader';

import luks from '../assets/lucas cv.jpeg'
import flagBR from '../assets/flagBR.png';
import flagUK from '../assets/flagUK.png';
import SocialLinksBtn from './SocialLinksBtn';
import NavBar from './NavBar';
import MobileAlert from './MobileAlert';

const FirstPage: React.FC = () => {

    WebFontLoader.load({
        google: {
        families: ['DM Sans: 400,500,700', 'Montserrat']
        }
    });

    const dispatch = useDispatch();
    const data = useSelector((state: RootState) => state.data.data);
    const lang = useSelector((state: RootState) => state.language.changeLanguage);
    
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);
    
    const langBR = () => dispatch(ChangeLanguage());
    const langUK = () => dispatch(ChangeLanguage());

    const [mobileAlert, setMobileAlert] = useState(true);

    const mobileAlertHandler: MouseEventHandler  = () => {
        if (mobileAlert === true) {
            setMobileAlert(false);
        } else {
            setMobileAlert(true)
        }
    }

    return(
        <div>
            {mobileAlert ? (
                <MobileAlert mobileAlertHandler={mobileAlertHandler}/>
            ) : (
            <div className={classes.container}>
                <div className={classes.leftSide}>
                    <div className={classes.flagsContainer}>
                        {
                            lang === 0 ? (
                    <button onClick={langBR} className={classes.flagBtn}>
                        <img className={classes.flags} src={flagBR} alt="icone bandeira brasileira" />
                    </button>
                            ) : (
                                <button onClick={langUK} className={classes.flagBtn}>
                        <img className={classes.flags} src={flagUK} alt="icone bandeira britânica" />
                    </button>
                            )
                        }
                    </div>
                    <h2>{data[lang]?.salute}</h2>
                    <h1>{data[lang]?.name}</h1>
                    <p>{data[lang]?.job}</p>
                    <SocialLinksBtn/>
                </div>
                <div className={classes.rightSide}>
                    <NavBar lang={lang}/>
                    <img className={classes.luksImg} src={luks} alt="foto Lucas Gauto" />
                </div>
            </div> )}
        </div>
    )
};

export default FirstPage;