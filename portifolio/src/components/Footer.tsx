import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import classes from '../css/Footer.module.css';
import face from '../assets/facebookFooter.png';
import linkedin from '../assets/linkedinFooter.png';
import insta from '../assets/instaFooter.png';
import mail from '../assets/mailFooter.png';
import arrow from '../assets/upArrow.png';


const Footer: React.FC = () => {

    const backBtn = ['BACK TO THE TOP', 'VOLTAR AO INÍCIO']

    const data = useSelector((state: RootState) => state.data.data);
    const lang = useSelector((state: RootState) => state.language.changeLanguage);

    return(
        <div className={classes.container}>
            <div className={classes.btnContainer}>
                <img src={arrow} alt="imagem de uma ceta para cima" />
                <button>{backBtn[lang]}</button>
            </div>
            <div className={classes.imgsContainter}>
                <button><img className={classes.img} src={face} alt="logo facebook" /></button>
                <button><img className={classes.img} src={linkedin} alt="logo linkedin" /></button>
                <button><img className={classes.img} src={insta} alt="logo instagram" /></button>
                <button><img className={classes.img} src={mail} alt="imagem de envelope de email" /></button>
            </div>
            <p className={classes.rights}>@2023 Lucas Gauto - {data[lang]?.rights}.</p>
        </div>
    )
};

export default Footer;