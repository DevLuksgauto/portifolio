import { Fragment, MouseEventHandler } from "react";
import classes from '../css/NavBarBtn.module.css';

interface NavBarButtonProps {
    typeBtn: string;
    goTo: string;
}

const NavBarBtn: React.FC<NavBarButtonProps> = ( { typeBtn, goTo } ) => {

    const handleGoTO: MouseEventHandler<HTMLButtonElement> = ()=> {
        const targetElement = document.getElementById(goTo);
        if(targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return(
        <Fragment>
            <button type='button' onClick={handleGoTO} className={classes.navBtn}>{typeBtn}</button>
        </Fragment>
    )
};

export default NavBarBtn;