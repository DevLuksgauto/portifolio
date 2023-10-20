import MobileNavBarBtn from './MobileNavBartBtn';
import classes from '../css/MobileMenu.module.css';
import { MouseEventHandler } from 'react';
import close from '../assets/CLoseX.png';

interface LanguageProps {
    lang: number;
    menuHandler: MouseEventHandler;
}

const MobileMenu: React.FC<LanguageProps> = ( { lang, menuHandler } ) => {

    const navButtonBR: string[] = ['Sobre mim', 'Skills', 'Portfólio', 'Contato'];
    const navButtonUK: string[] = ['About me', 'Skills', 'Portfolio', 'Contact'];
    const goTo: string[] = ['aboutme', 'skills', 'portfolio', 'contact'];

    return(
        <>
            <div className={classes.header}>
                    <button className={classes.closeBtn} onClick={menuHandler}><img src={close} alt="close icon" /></button>
                <div className={classes.subContainer}>
                    <MobileNavBarBtn typeBtn={lang === 1 ? navButtonBR[0] : navButtonUK[0]} goTo={goTo[0]}/>
                    <MobileNavBarBtn typeBtn={lang === 1 ? navButtonBR[1] : navButtonUK[1]} goTo={goTo[1]}/>
                    <MobileNavBarBtn typeBtn={lang === 1 ? navButtonBR[2] : navButtonUK[2]} goTo={goTo[2]}/>
                    <MobileNavBarBtn typeBtn={lang === 1 ? navButtonBR[3] : navButtonUK[3]} goTo={goTo[3]}/>
                </div>
            </div>
        </>
    )
};

export default MobileMenu;