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
        <div className="App__Header">
          <img src={logo} className="App__Logo" alt="logo" />
          <h2>Урок №7 - Задача №2</h2>
          <p>Создать компонент для ввода числовой информации</p>
        </div>
        <div className="App__Body">
          <h3>Вариант спиннера без оформления, с шагом квантования 1, и шагом изменения по кнопке 1:</h3>
          <span className="Spinner">
            <Spinner id="spinner1" value={0} min={-1e6} max={1e6} step={1} multiple={1} digits={6} />
          </span>
          <h3>Вариант спиннера в сером цвете, с шагом квантования 2, и шагом изменения по кнопке 4:</h3>
          <span className="Spinner">
            <SpinnerInGrey id="spinner2" value={0} min={-6} max={24} step={4} multiple={2} digits={6} />
          </span>
          <h3>Вариант спиннера в синем цвете с круглыми кнопками, с шагом квантования 0.025, и шагом изменения по кнопке 0.15:</h3>
          <span className="Spinner">
            <SpinnerInBlue id="spinner3" value={0} min={-6} max={24} step={0.15} multiple={0.025} digits={6} />
          </span>
          <h3>Вариант спиннера в зелёном цвете с кнопками справа, с шагом квантования 0.1, и шагом изменения по кнопке 0.5:</h3>
          <span className="Spinner">
            <SpinnerInGreen id="spinner4" value={0} min={-5} max={20} step={0.5} multiple={0.1} digits={6} />
          </span>
        </div>
      </div>
    );
  }
}

export default App;
