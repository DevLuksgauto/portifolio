import { combineReducers } from 'redux';
import dataReducer from './DataReducer';
import LanguageReducer from './LanguageReducer';

const rootReducer = combineReducers({
    data: dataReducer,
    language: LanguageReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
