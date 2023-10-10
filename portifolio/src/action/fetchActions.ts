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
        const response = await axios.get('https://run.mocky.io/v3/f8ae069d-51b7-4464-a839-226bfe16d36a');
        dispatch(fetchDataSuccess(response.data));
        } catch (error) {
            console.error(error);
        }
    };
};

