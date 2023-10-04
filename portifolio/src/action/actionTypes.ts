import { Action } from 'redux';

interface FetchDataSuccessAction {
    type: typeof FETCH_DATA_SUCCESS;
    payload: any;
}
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export type DataActionTypes = FetchDataSuccessAction;



export const LANGUAGE_CHANGE = 'CHANGE_LANGUAGE';
export interface ChangeLanguageAction extends Action {
    type: typeof LANGUAGE_CHANGE;
}

export function ChangeLanguage(): ChangeLanguageAction {
    return {
        type: LANGUAGE_CHANGE
    };
}