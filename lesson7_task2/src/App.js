import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Spinner from './Spinner';
import SpinnerInGrey from './SpinnerInGrey';
import SpinnerInBlue from './SpinnerInBlue';
import SpinnerInGreen from './SpinnerInGreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Урок №7 - Задача №2</h2>
          <p>Создать компонент для ввода числовой информации</p>
        </div>
        <div className="App-intro" id="intro">
          <h3>Вариант спиннера без оформления, с шагом квантования 1, и шагом изменения по кнопке 1:</h3>
          <span className="Spinner"><Spinner di="spinner1" /></span>
          <h3>Вариант спиннера в сером цвете, с шагом квантования 2, и шагом изменения по кнопке 4:</h3>
          <span className="Spinner"><SpinnerInGrey di="spinner2" /></span>
          <h3>Вариант спиннера в синем цвете с круглыми кнопками, с шагом квантования 0.025, и шагом изменения по кнопке 0.15:</h3>
          <span className="Spinner"><SpinnerInBlue di="spinner3" /></span>
          <h3>Вариант спиннера в зелёном цвете с кнопками справа, с шагом квантования 0.1, и шагом изменения по кнопке 0.5:</h3>
          <span className="Spinner"><SpinnerInGreen di="spinner4" /></span>
        </div>
      </div>
    );
  }
}

export default App;
