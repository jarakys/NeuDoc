import { signupWithEmail } from '../../actions/signup.action';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignupComponent from './signup.component';

export const mapStateToProps = (state) => {
    return state;
}

export const mapDispatchToProps = (dispatch) => {
    return {
        doSignupWithEmail: (signupDetails) => {
            dispatch(signupWithEmail(signupDetails));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupComponent));
