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
        const response = await axios.get('https://run.mocky.io/v3/86cb82a9-3a5f-4d61-849a-cc1a81427346');
        dispatch(fetchDataSuccess(response.data));
        } catch (error) {
            console.error(error);
        }
    };
};

