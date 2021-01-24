import React, { Component } from 'react';
import SignupForm from './signup.form';
import { Link, Route } from 'react-router-dom';
import '../../../css/login.css';

export class SignupComponent extends Component {

    submitForm = values => {
        this.props.doSignupWithEmail(values);
    }

    render() {
        return (
            <div className="module-root-container-center">
                <div className="login-container">
                    <div className="app-details-container"></div>
                    <div className="login-form-container">
                        <SignupForm onSubmit={this.submitForm}></SignupForm>
                        <div className="login-form-footer">
                            <span className="login-link-span">Already have an account? <Link className="login-link" to={{ pathname: "/login", href: "#" }}>Login now</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupComponent;
