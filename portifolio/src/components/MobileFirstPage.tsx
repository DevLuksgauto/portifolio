import classes from '../css/MobileFirstPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { ChangeLanguage } from '../action/actionTypes';
import { MouseEventHandler, useEffect, useState } from 'react';
import { fetchData } from '../action/fetchActions';
import WebFontLoader from 'webfontloader';
import { BottomSheet } from 'react-spring-bottom-sheet';

import luks from '../assets/luksRemoveBGcolored.png';
import flagBR from '../assets/flagBR.png';
import flagUK from '../assets/flagUK.png';
import menu from '../assets/menuIcon.svg';
import MobileSocialLinksBtn from './MobileSocialLinksBtn';
import MobileMenu from './MobileMenu';

const MobileFirstPage: React.FC = () => {

    WebFontLoader.load({
        google: {
        families: ['DM Sans: 400,500,700,900', 'Montserrat']
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

    const [open, setOpen] = useState(false);
    const menuHandler: MouseEventHandler  = () => !open ? setOpen(true) : setOpen(false)

    return(
        <div className={classes.container}>
            <div className={classes.header}>
                <button onClick={menuHandler} className={classes.flagBtn}>
                    <img src={menu} alt="menu icon" width={40}/>
                </button>
                <BottomSheet className={classes.meuPopUp} blocking={false} open={open}>
                    <MobileMenu menuHandler={menuHandler} lang={lang}/>
                </BottomSheet>
                {lang === 0 ? (
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
            <img className={classes.img} src={luks} alt="foto Lucas Gauto" />
            <div className={classes.infoContainer}>
                <div className={classes.info}>
                    <h2 className={classes.data1}>{data[lang]?.salute}</h2>
                    <h1 className={classes.data1}>{data[lang]?.name}</h1>
                    <p className={classes.data2}>{data[lang]?.job}</p>
                </div>
                    <MobileSocialLinksBtn/>
            </div>
            <div className={classes.geometricContainer}>
                <div className={classes.inclinedDiv}></div>
                <div className={classes.straightDiv}>
                </div>
            </div>
        </div>
    )
};

export default MobileFirstPage;