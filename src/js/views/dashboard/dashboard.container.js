import DashboardComponent from './dashboard.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userDetails } from '../../actions/user-details.action';

const mapStateToProps = (state, ownProps) => {
    return {
        login: state.login,
        alert: state.alert
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return null;
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardComponent));
