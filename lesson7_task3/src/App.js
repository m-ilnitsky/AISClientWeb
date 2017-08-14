import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginForm from './LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__Header">
          <img src={logo} className="App__Logo" alt="logo" />
          <h2>Урок №7 - Задача №3</h2>
          <p>Создать компонент диалог для авторизации</p>
        </div>
        <div className="App__Body">
          <h2>Добро пожаловать!</h2>
          <LoginForm id="LoginForm" />
        </div>
      </div>
    );
  }
}

export default App;
