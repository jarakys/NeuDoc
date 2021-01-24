import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

let SignupForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className="app-header-panel">
                <div className="app-title">React Client Template</div>
                <div className="app-caption">SignUp with E-mail</div>
            </div>
            <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input name="firstName" type="text" className="form-control" id="firstName" />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input name="lastName" type="text" className="form-control" id="lastName" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input name="email" type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input name="phone" type="phone" className="form-control" id="phone" />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Password:</label>
                <input name="password" type="password" className="form-control" id="password" />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Confirm Password:</label>
                <input name="confirmPassword" type="password" className="form-control" id="confirmPassword" />
            </div>
            <button type="submit" className="btn btn-success btn-login">SignUp</button>
        </form>
    )
}

SignupForm = reduxForm({
    form: "signupForm"
})(SignupForm);

export default SignupForm;