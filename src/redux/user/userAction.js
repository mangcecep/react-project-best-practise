import apiClient from '../../services/api'

import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
} from "./userTypes";

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST,
    };
};

export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users,
    };
};

export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error,
    };
};

export const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest);
        apiClient.get(`users`)
            .then((res) => {
                const users = res.data;
                dispatch(fetchUserSuccess(users));
            })
            .catch((err) => {
                const error = err.message;
                dispatch(fetchUserFailure(error));
            });
    };
};

export const searchUser = (data) => {
    return (dispatch) => {
        dispatch(fetchUserRequest);
        apiClient.get(`users/${data}`)
            .then((res) => {
                const users = res.data;
                dispatch(fetchUserSuccess(users));
            })
            .catch((err) => {
                const error = err.message;
                dispatch(fetchUserFailure(error));
            });
    };
};
