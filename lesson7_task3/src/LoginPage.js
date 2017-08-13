import React, { Component } from 'react';
import './LoginPage.css';

import LoginForm from './LoginForm';

class LoginPage extends Component {
  render() {
    return (
        <div className="LoginPage">
            <div className="LoginPage__Vertical">
                <div className="LoginPage__Horizontal">
                    <LoginForm id="LoginForm" />
                </div>
            </div>
        </div>
    );
  }
}

export default LoginPage;