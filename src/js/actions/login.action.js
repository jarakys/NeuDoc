import axios from 'axios';

export const sendDoc = (email, name, specilatyId, groupId, destinationPlace, studentTypeId) => {
    return (dispatch) => {
        console.log('Login POST Object::::::::::::::' + JSON.stringify({email, name, specilatyId, groupId, destinationPlace, studentTypeId}));
        let url = 'http://www.dovidkaei.hneu.edu.ua/api/StudentAPI';
        // let requestPayload = 'username=' + loginDetails.username + '&password=' + loginDetails.password;
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json'
            }, 
            data: {
                "FIO":name,
                "SpecialtyId": specilatyId,
                "GroupId": groupId,
                "Destination": destinationPlace,
                "EmailAddress": email,
                "StudentTypeId": studentTypeId
            }
        };
        return axios.post(url, axiosConfig).then((response) => {
            console.log('login success response::::' + JSON.stringify(response));

            if (response.data.success) {
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: response.data
                });
            } else {
                dispatch({
                    type: "LOGIN_FAILURE",
                });
            }
        }, error => {
            console.log('login failure response::::' + JSON.stringify(error));
            dispatch({
                type: "LOGIN_FAILURE",
                payload: error
            });
        });
    }
}
