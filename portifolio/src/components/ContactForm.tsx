import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';

const ContactForm: React.FC = () => {

    const data = useSelector((state: RootState) => state.data.data);
    const lang = useSelector((state: RootState) => state.language.changeLanguage);

    return(
        <div>
            <h1>{data[lang]?.contact}</h1>
        </div>
    )
};

export default ContactForm;