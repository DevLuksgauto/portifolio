import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import classes from '../css/Skills.module.css';

import html from '../assets/html.png';
import css3 from '../assets/css3.png';
import sass from '../assets/sass.png';
import javascript from '../assets/js.png';
import react from '../assets/react.png';
import bootstrap from '../assets/bootstrap.png';
import git from '../assets/git.png';
import figma from '../assets/figma.png';
import nodejs from '../assets/nodejs.png';
import firebase from '../assets/firebase.png';
import mongodb from '../assets/mongodb.png';
import typescript from '../assets/ts.png';
import angular from '../assets/angular.png';
import mysql from '../assets/mysql.png';
import csharp from '../assets/csharp.png';
import english from '../assets/uk.png';
import spanish from '../assets/spain.png';


const Skills: React.FC = () => {

    const knownTechPics: any[] = [html, css3, sass,
        javascript, react, bootstrap,
        git, figma, nodejs, firebase,
        mongodb, typescript, angular];

    const knownTech: string[] = ['HTML', 'CSS3', 'SASS',
        'JAVASCRIPT', 'REACT', 'BOOTSTRAP',
        'GIT', 'FIGMA', 'NODEJS', 'FIREBASE',
        'MONGODB', 'TYPESCRIPST', 'ANGULAR'];

    const learningTechPics: string[] = [mysql, csharp];
    const learningTech: string[] = ['MYSQL', 'C#'];

    const otherSkillsPics: string[] = [english, spanish];
    const otherSkills: string[] = ['ENGLISH C1', 'SPANISH C1'];

    const data = useSelector((state: RootState) => state.data.data);
    const lang = useSelector((state: RootState) => state.language.changeLanguage);
    
    return(
        <div id="skills" className={classes.container}>
            <h1 className={classes.title}>{data[lang]?.skills[0].toUpperCase()}</h1>
            <div className={classes.subcontainer}>
                <p className={classes.subtitle}>{data[lang]?.skills[1].toUpperCase()}:</p>
                <div className={classes.skillsContainer}>
                    {knownTechPics.map((item, index)=>{
                        return (
                            <div key={index} >
                                <img src={item} alt={`imagem da tecnologia ${item}`} />
                                <p className={classes.techNames}>{knownTech[index]}</p>
                            </div>
                        )
                    })}
                </div>
                    <p className={classes.subtitle}> {data[lang]?.skills[2].toUpperCase()}:</p>
                <div className={classes.skillsContainer}>
                    {learningTechPics.map((item, index)=>{
                        return (
                            <div key={index} >
                                <img key={index} src={item} alt={`imagem da tecnologia ${item}`} />
                                <p className={classes.techNames}>{learningTech[index]}</p>
                            </div>
                        )
                    })}
                </div>
                    <p className={classes.subtitle}>{data[lang]?.skills[3].toUpperCase()}:</p>
                <div className={classes.skillsContainer}>
                    {otherSkillsPics.map((item, index)=>{
                        return (
                            <div key={index} >
                                <img key={index} src={item} alt={`imagem da tecnologia ${item}`} />
                                <p className={classes.techNames}>{otherSkills[index]}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default Skills;