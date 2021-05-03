import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
} from "./userTypes"

const initialSate = {
    loading: false,
    users: [],
    error: "",
};

const reducer = (state = initialSate, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                users: action.payload,
            };
        case FETCH_USER_FAILURE:
            return {
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
