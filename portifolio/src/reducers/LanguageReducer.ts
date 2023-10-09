import { Reducer } from 'redux';
import { LANGUAGE_CHANGE, ChangeLanguageAction } from './../action/actionTypes';

interface LangState {
    changeLanguage: number;
}

const initialState: LangState = {
    changeLanguage: 1
};

const LanguageReducer: Reducer<LangState, ChangeLanguageAction> = (
    state = initialState,
    action
    ) => {
        switch (action.type) {
        case LANGUAGE_CHANGE:
        return {
            ...state,
            changeLanguage: state.changeLanguage === 0 ? 1 : 0
        };
        default:
        return state;
    }
};

export default LanguageReducer;
