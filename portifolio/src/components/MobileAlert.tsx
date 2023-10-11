import { useEffect, useState } from 'react';
import { MouseEventHandler } from 'react';

import classes from '../css/MobileAlert.module.css';

interface MobileAlertProps {
    mobileAlertHandler: MouseEventHandler;
}

const MobileAlert: React.FC<MobileAlertProps>= ( { mobileAlertHandler } ) => {

    const [language, setLanguage] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setLanguage((prevValue) => !prevValue);
        }, 2000);
    
        return () => {
        clearInterval(interval);
        };
    }, []);

    return(
        <div className={classes.container}>
            <button onClick={mobileAlertHandler} className={classes.closeBtn}>CLOSE</button>
            <iframe className={classes.cat} src="https://giphy.com/embed/heIX5HfWgEYlW" width="380" height="480" frameBorder="0" allowFullScreen></iframe>
            {language ? (
                <>
                    <p className={classes.alert}>Alerta</p>
                    <p className={classes.p}>Versão mobile ainda em processo de ajustes...</p>
                </>
            ) : (
                <>
                    <p className={classes.alert}>Alert</p>
                    <p className={classes.p}>Mobile version still in the process of adjustments...</p>
                </>
            )
            }
        </div>
    )
};

export default MobileAlert;