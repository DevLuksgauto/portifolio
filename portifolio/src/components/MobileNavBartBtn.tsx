import { Fragment, MouseEventHandler } from "react";
import classes from '../css/MobileNavBarBtn.module.css';

interface NavBarButtonProps {
    typeBtn: string;
    goTo: string;
    menuHandler: MouseEventHandler;
}

const MobileNavBarBtn: React.FC<NavBarButtonProps> = ( { typeBtn, goTo, menuHandler } ) => {

    const handleGoTO: MouseEventHandler<HTMLButtonElement> = (e)=> {
        const targetElement = document.getElementById(goTo);
        if(targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            menuHandler(e);
        }
    }

    return(
        <Fragment>
            <button type='button' onClick={handleGoTO} className={classes.navBtn}>{typeBtn}</button>
        </Fragment>
    )
};

export default MobileNavBarBtn;