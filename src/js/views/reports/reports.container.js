import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReportsComponent from './reports.component';

const mapStateToProps = (state) => {
    return {
        login: state.login,
        alert: state.alert,
        reports: state.reports
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReportsComponent));