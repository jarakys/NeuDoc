import axios from 'axios';

export const getUserDetailsById = userId => {

    return {
        type: "USER_DETAILS_RETRIEVAL",
        payload: null
    }
}