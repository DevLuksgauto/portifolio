import insta from '../assets/instaIcon.svg';
import github from '../assets/githubicon.svg';
import linkedin from '../assets/linkedinIcon.svg';
import classes from '../css/MobileSocialLinksBtn.module.css';

const MobileSocialLinksBtn: React.FC = () =>{

    const instaLink: () => void = () => window.open('https://www.instagram.com/luksgauto/', '_blank');
    const githubLink: () => void = () => window.open('https://github.com/DevLuksgauto', '_blank');
    const linkedinLink: () => void = () => window.open('https://www.linkedin.com/in/devluksgauto/', '_blank');

    return(
        <div className={classes.container}>
            <button onClick={instaLink} className={classes.linksBtn}><img src={insta} alt="ícone Instagram"/></button>
            <button onClick={githubLink} className={classes.linksBtn}><img src={github} alt="ícone Github"/></button>
            <button onClick={linkedinLink} className={classes.linksBtn}><img src={linkedin} alt="ícone Linkedin"/></button>
        </div>
    )
};

export default MobileSocialLinksBtn;