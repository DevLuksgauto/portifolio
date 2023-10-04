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
        const response = await axios.get('https://run.mocky.io/v3/1032a241-f46a-4b04-a198-c9bde059608c');
        dispatch(fetchDataSuccess(response.data));
        } catch (error) {
            console.error(error);
        }
    };
};

