import {
    GET_DATA,GET_DATA_SUCCESS
} from './types'
import axios from 'axios';
import {baseUrl} from '../Config'


export const _getData = () => {
    return (dispatch) => {
        dispatch({ type: GET_DATA });
        axios.get(baseUrl ,
           
        ).then(function (response) {
            getDataSucc(dispatch, response.data)
        }).catch(function (error) {
            alert(error.message)
        })
    };
};

const getDataSucc = (dispatch, data) => {
    dispatch({
        type: GET_DATA_SUCCESS,
        payload: data
    });
};
