import axios from 'axios';

export const signupWithEmail=(signupDetails)=>{

    return (dispatch)=>{
        let url="http://localhost:8080/money-flux-dataservice/login-service/signup-with/email";
        let requestPayload='firstName='+signupDetails.firstName+'&lastName='+signupDetails.lastName
        +'&email='+signupDetails.email+'&phone='+signupDetails.phone+'&password='+signupDetails.password;
        let axiosConfig={
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        return axios.post(url, requestPayload, axiosConfig).then(
            (response)=>{
                console.log("Signup Successfull");
                return {
                    type: "SIGNUP_SUCCESS",
                    payload: response.data
                }
            },
            (error)=>{
                console.log("Signup Failed"); 
                return {
                    type: "SIGNUP_FAILURE",
                    payload: error
                }
            }
        )
    }
}