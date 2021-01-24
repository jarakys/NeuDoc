import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EventsComponent from './events.component';


const mapStateToProps = (state) => {
    return {
        login: state.login,
        alert: state.alert,
        events: state.events
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsComponent));