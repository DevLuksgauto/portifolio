import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { app } from '../services/firebaseConfig';
import { useState } from 'react';

import classes from '../css/ContactForm.module.css';
import separator from '../assets/separatorBlack 1.png';

const ContactForm: React.FC = () => {

    const data = useSelector((state: RootState) => state.data.data);
    const lang = useSelector((state: RootState) => state.language.changeLanguage);

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ message, setMessage ] = useState('');

    const db = getFirestore(app);
    const ContactFormRef = collection(db, 'contactForm')

    // const  handleSubmit: () => void = async () => {
    //     const formDoc = await addDoc(ContactFormRef,{
    //         name,
    //         email,
    //         phone,
    //         message
    //     })
        // console.log(formDoc)
    // }

    return(
        <div className={classes.container}>
            <h1 className={classes.contact}>{data[lang]?.contact}</h1>
            <img className={classes.img} src={separator} alt="Separador de página" />
            <fieldset className={classes.form}>
                <input
                    className={classes.input}
                    type="text"
                    placeholder={data[lang]?.placeholder[0]}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    className={classes.input}
                    type="email"
                    placeholder={data[lang]?.placeholder[1]}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    className={classes.input}
                    type="tel"
                    placeholder={data[lang]?.placeholder[2]}
                    value={phone}
                    onChange={e => setPhone(e.target.value.replace(/\D/g, ''))}
                />
                <textarea
                    className={classes.input}
                    placeholder={data[lang]?.placeholder[3]}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
            </fieldset>
            <button
                // onClick={handleSubmit}
                className={classes.submit}
                >{data[lang]?.button}</button>
        </div>
    )
};

export default ContactForm;