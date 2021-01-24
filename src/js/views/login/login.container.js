import { connect } from 'react-redux';
import LoginComponent from './login.component';
import { sendDoc } from '../../actions/login.action';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  return state.login;
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

      sendDoc: (email, name, specilatyId, groupId, destinationPlace, studentTypeId)=>{
        dispatch(sendDoc(email, name, specilatyId, groupId, destinationPlace, studentTypeId));
        // dispatch(loginWithEmail(ownProps.history, email, name, specilatyId, groupId, destinationPlace, studentTypeId));
      }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent));
