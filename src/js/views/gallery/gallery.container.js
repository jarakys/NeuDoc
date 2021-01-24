import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GalleryComponenet from './gallery.component';

const mapStateToProps = (state) => {
    return {
        login: state.login,
        alert: state.alert,
        gallery: state.gallery
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GalleryComponenet));