import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import LoginForm from './login.form';
import '../../../css/login.css';

export class LoginComponent extends Component {

    state ={
        revision: 0
    }

    submitForm = (email, name, specilatyId, groupId, destinationPlace, studentTypeId) => {
        console.log(email, name, specilatyId, groupId, destinationPlace, studentTypeId)
        if(email && name && groupId != 0 && specilatyId != 0&& destinationPlace && studentTypeId != 0) {
            console.log("cool")
            this.setState((prev) => ({revision: prev.revision+1}))
            this.props.sendDoc(email, name, specilatyId, groupId, destinationPlace, studentTypeId)
        } else {
            alert("Перевiрте данi")
        }
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-form-container">
                    <LoginForm revision = {this.state.revision} onSubmit={this.submitForm}></LoginForm>
                </div>
                <div className="app-details-container">
                <img className="centerImage" src="/Users/kyrylochernov/Downloads/IMG_2972.JPG"
     alt="Логотип MDN - изображение динозавра с текстом MDN web docs"></img>
                </div>
            </div>
        );
    }
}

export default LoginComponent;
