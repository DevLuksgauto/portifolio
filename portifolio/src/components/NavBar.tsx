import NavBarBtn from './NavBarBtn';
import classes from '../css/NavBar.module.css';

interface LanguageProps {
    lang: number;
}
const NavBar: React.FC<LanguageProps> = ( { lang } ) => {

    const navButtonBR: string[] = ['Sobre mim', 'Skills', 'Portfólio', 'Contato'];
    const navButtonUK: string[] = ['About me', 'Skills', 'Portfolio', 'Contact'];
    const goTo: string[] = ['aboutme', 'skills', 'portfolio', 'contact'];

    return(
        <>
            <header className={classes.header}>
                <NavBarBtn typeBtn={lang === 1 ? navButtonBR[0] : navButtonUK[0]} goTo={goTo[0]}/>
                <NavBarBtn typeBtn={lang === 1 ? navButtonBR[1] : navButtonUK[1]} goTo={goTo[1]}/>
                <NavBarBtn typeBtn={lang === 1 ? navButtonBR[2] : navButtonUK[2]} goTo={goTo[2]}/>
                <NavBarBtn typeBtn={lang === 1 ? navButtonBR[3] : navButtonUK[3]} goTo={goTo[3]}/>
            </header>
        </>
    )
};

export default NavBar;