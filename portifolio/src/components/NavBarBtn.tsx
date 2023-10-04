import { Fragment } from "react";
import classes from '../css/NavBarBtn.module.css';

interface NavBarButtonProps {
    typeBtn: string;
}

const NavBarBtn: React.FC<NavBarButtonProps> = (props) => {

    return(
        <Fragment>
            <button className={classes.navBtn}>{props.typeBtn}</button>
        </Fragment>
    )
};

export default NavBarBtn;