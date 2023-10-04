import NavBarBtn from './NavBarBtn';
import classes from '../css/NavBar.module.css';

interface LanguageProps {
    lang: number;
}
const NavBar: React.FC<LanguageProps> = (props) => {

    const navButtonBR: string[] = ['Sobre mim', 'Skills', 'Portifólio', 'Contato'];
    const navButtonUK: string[] = ['About me', 'Skills', 'Portfolio', 'Contact'];

    return(
        <>
            <header className={classes.header}>
                <NavBarBtn typeBtn={props.lang === 1 ? navButtonBR[0] : navButtonUK[0]}/>
                <NavBarBtn typeBtn={props.lang === 1 ? navButtonBR[1] : navButtonUK[1]}/>
                <NavBarBtn typeBtn={props.lang === 1 ? navButtonBR[2] : navButtonUK[2]}/>
                <NavBarBtn typeBtn={props.lang === 1 ? navButtonBR[3] : navButtonUK[3]}/>
            </header>
        </>
    )
};

export default NavBar;