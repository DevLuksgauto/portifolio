import { Dispatch } from 'redux';
import axios from 'axios';
import { DataActionTypes, FETCH_DATA_SUCCESS } from './actionTypes';

export const fetchDataSuccess = (data: any): DataActionTypes => ({
    type: FETCH_DATA_SUCCESS,
    payload: data,
});

export const fetchData = (): any => {
    return async (dispatch: Dispatch<DataActionTypes>) => {
    try {
        const response = await axios.get('https://run.mocky.io/v3/6ef99fb1-5fd7-48ad-98a6-e234bc3abda3');
        dispatch(fetchDataSuccess(response.data));
        } catch (error) {
            console.error(error);
        }
    };
};

