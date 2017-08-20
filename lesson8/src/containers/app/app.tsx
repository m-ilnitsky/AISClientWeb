import './app.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import HomePage from '../pages/home/homePage';
import {IGlobalState} from '../../models/state/globalState';
import {AppActions} from '../../actions/appActions';
const logo = require('./logo.svg');

import LoginForm from './LoginForm.js';

interface IAppProps{
  isInitializing: boolean;
  isLoading: boolean;
  currency: any;

  init: () => void;
}

interface IAppState{

}

class App extends React.Component<IAppProps, IAppState> {
  constructor() {
    super();
  }

  componentWillMount(){
    this.props.init();
  }

  render() {
    
    if(this.props.isInitializing) { return null;}

    const date = this.props.currency && this.props.currency.date ? this.props.currency.date : ''; 
    const currencyCode = this.props.currency && this.props.currency.base ? this.props.currency.base : ''; 
    const rub = this.props.currency && this.props.currency.rates ? this.props.currency.rates.RUB : ''; 
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <ul>
            <li><span>today: {date}</span></li>
            <li><span>{currencyCode}: {rub}</span></li>
          </ul>
        </p>
        <LoginForm />

        <Route path='/home' component={HomePage}/>
      </div>
    );
  }
}

const mapStateToProps = (state: IGlobalState, ownProps: any) => {
  return {
    isInitializing: state.app.isInitializing
    , isLoading: state.app.isLoading
    , currency: state.app.currency
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    init: () => { dispatch(AppActions.init())  }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
