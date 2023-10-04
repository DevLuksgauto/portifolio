import { DataActionTypes, FETCH_DATA_SUCCESS } from '../action/actionTypes';

interface DataState {
    data: any[];
}

const initialState: DataState = {
    data: [],
};

const dataReducer = (state = initialState, action: DataActionTypes): DataState => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
        return {
        ...state,
        data: action.payload,
        };
        default:
        return state;
    }
};

export default dataReducer;
