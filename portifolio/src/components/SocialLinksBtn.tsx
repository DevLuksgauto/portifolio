import insta from '../assets/instagram (1).png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin (1).png';
import whatsApp from '../assets/whatsapp (1).png';
import classes from '../css/SocialLinksBtn.module.css';

const SocialLinksBtn: React.FC = () =>{

    const instaLink: () => void = () => window.open('https://www.instagram.com/luksgauto/', '_blank');
    const githubLink: () => void = () => window.open('https://github.com/DevLuksgauto', '_blank');
    const linkedinLink: () => void = () => window.open('https://www.linkedin.com/in/devluksgauto/', '_blank');
    const whatsAppLink: () => void = () => window.open('https://wa.me/5551993143439', '_blank');

    return(
        <div className={classes.container}>
            <button onClick={instaLink} className={classes.linksBtn}><img src={insta} alt="ícone Instagram"/></button>
            <button onClick={githubLink} className={classes.linksBtn}><img src={github} alt="ícone Github"/></button>
            <button onClick={linkedinLink} className={classes.linksBtn}><img src={linkedin} alt="ícone Linkedin"/></button>
            <button onClick={whatsAppLink} className={classes.linksBtn}><img src={whatsApp} alt="ícone WhatsApp"/></button>
        </div>
    )
};

export default SocialLinksBtn;