import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ExpenseComponent from './expenses.component';

export const mapStateToProps = (state, ownProps) => {

    return state;
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExpenseComponent));