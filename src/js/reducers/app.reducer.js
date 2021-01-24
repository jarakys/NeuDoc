import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { Login } from './login.reducer';
import { Signup } from './signup.reducer';
import { Alert } from './alert.reducer';
import { Dashboard } from './dashboard.reducer';
import { Events } from './events.reducer';
import { Gallery } from './gallery.reducer';
import { Expenses } from './expenses.reducer';
import { Reports } from './reports.reducer';
import { Maintenance } from './maintenance.reducer';
import { Settings } from './settings.reducer';


export default combineReducers({
    routing: routerReducer,
    form: formReducer,
    login: Login,
    signup: Signup,
    alert: Alert,
    dashboard: Dashboard,
    events: Events,
    gallery: Gallery,
    expenses: Expenses,
    reports: Reports,
    maintenance: Maintenance,
    settings: Settings
});
