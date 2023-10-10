import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import classes from '../css/Footer.module.css';
import face from '../assets/facebookFooter.png';
import linkedin from '../assets/linkedinFooter.png';
import insta from '../assets/instaFooter.png';
import mail from '../assets/mailFooter.png';
import arrow from '../assets/upArrow.png';
import { useEffect, useRef } from 'react';


const Footer: React.FC = () => {

    const backBtn = ['BACK TO THE TOP', 'VOLTAR AO INÍCIO'];

    const botaoRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
        };
        if (botaoRef.current) {
            botaoRef.current.addEventListener('click', scrollToTop);
        }
        return () => {
        if (botaoRef.current) {
            botaoRef.current.removeEventListener('click', scrollToTop);
        }
        };
    }, []);

    const data = useSelector((state: RootState) => state.data.data);
    const lang = useSelector((state: RootState) => state.language.changeLanguage);

    const instaLink: () => void = () => window.open('https://www.instagram.com/luksgauto/', '_blank');
    const facebook: () => void = () => window.open('https://www.facebook.com/lucas.gauto.7', '_blank');
    const linkedinLink: () => void = () => window.open('https://www.linkedin.com/in/devluksgauto/', '_blank');
    const handleEmailButtonClick = () => {
        const email = 'lucascorreagauto@gmail.com';
        const subject = 'Contato direto do Portifólio';
    
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
        window.open(mailtoLink, '_blank');
    };

    return(
        <div id='footer' className={classes.container}>
                <button className={classes.backBtn} ref={botaoRef}>
                <img src={arrow} alt="imagem de uma ceta para cima" />
                    {backBtn[lang]
                    }</button>
            <div className={classes.imgsContainter}>
                <button onClick={facebook}><img className={classes.img} src={face} alt="logo facebook" /></button>
                <button onClick={linkedinLink}><img className={classes.img} src={linkedin} alt="logo linkedin" /></button>
                <button onClick={instaLink}><img className={classes.img} src={insta} alt="logo instagram" /></button>
                <button onClick={handleEmailButtonClick}><img className={classes.img} src={mail} alt="imagem de envelope de email" /></button>
            </div>
            <p className={classes.rights}>@2023 Lucas Gauto - {data[lang]?.rights}.</p>
        </div>
    )
};

export default Footer;