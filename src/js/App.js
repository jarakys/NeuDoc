import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import LoginContainer from './views/login/login.container';
import SignupContainer from './views/signup/signup.container';
import DashboardContainer from './views/dashboard/dashboard.container';
import EventsContainer from './views/events/events.container';
import GalleryContainer from './views/gallery/gallery.container';
import ExpensesContainer from './views/expenses/expenses.container';
import GroupExpensesContainer from './views/expenses/group-expenses.container';
import IndividualExpensesContainer from './views/expenses/individual-expenses.container';
import ReportsContainer from './views/reports/reports.container';
import MaintenanceContainer from './views/maintenance/maintenance.container';
import SettingsContainer from './views/settings/settings.container';
import logo from '../images/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="app full-height">
        <div className={this.setAppMainViewClass()}>
          <header className="app-header">
            <div className="app-header-menu-dock">
              <nav className="navbar navbar-expand">
                <ul className="navbar-nav">
                  <li className={this.setNavItemClass('/login')}>
                    <Link className="nav-link" to={{ pathname: '/login', hash: '#' }}>Заказати довідку</Link>
                  </li>
                  <li className={this.setNavItemClass('/events')}>
                    <Link className="nav-link" to={{ pathname: '/events', hash: '#' }}>Звіт з оплати</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <div>
            <Route exact component={DashboardContainer} path="/dashboard" />
            <Route component={LoginContainer} path="/login" />
          </div>
        </div>
        
        <Route component={SignupContainer} path="/signup" />
      </div>
    );
  }

  setAppMainViewClass = () => {
    return 'app-main-view';
  }

  setNavItemClass = nav => {
    return this.props.location.pathname.includes(nav) ? 'nav-item active' : 'nav-item';
  }
}

export default App;
