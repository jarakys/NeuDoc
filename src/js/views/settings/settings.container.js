import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SettingsComponent from './settings.component';

const mapStateToProps = (state, ownProps) => {
    return state;
}

const mapDispatchToPops = (dispatch, ownProps) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToPops)(SettingsComponent));