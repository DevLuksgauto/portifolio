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
        const response = await axios.get('https://run.mocky.io/v3/16a72e47-7db4-43e9-8403-bd0d7f3ad406');
        dispatch(fetchDataSuccess(response.data));
        } catch (error) {
            console.error(error);
        }
    };
};

