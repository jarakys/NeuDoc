import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MaintenanceComponent from './maintenance.component';


const mapStateToProps = (state) => {
    return {
        login: state.login,
        alert: state.alert,
        maintenance: state.maintenance
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MaintenanceComponent));
