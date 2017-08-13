import React from 'react';
import Spinner from './Spinner';
import './SpinnerInBlue.css';

class SpinnerInBlue extends Spinner {

  constructor(props){
    super();
  //  if(props === undefined){
      this.state = {
        value: 0,         // Искомое число
        min: -6,          // Минимальное значение числа
        max: 24,          // Максимальное значение числа
        step: 0.15,       // Шаг изменения числа кнопками
        multiple: 0.025,  // Число должно без остатка делиться на данную величину
        digits: 6         // Точность задания числа выражающаяся в количестве десятичных знаков после точки
      };
  /*  }else{
      this.state = {
        value: this.props.value,         // Искомое число
        min: this.props.min,          // Минимальное значение числа
        max: this.props.max,          // Максимальное значение числа
        step: this.props.step,        // Шаг изменения числа кнопками
        multiple: this.props.multiple,    // Число должно без остатка делиться на данную величину
        digits: this.props.digits         // Точность задания числа выражающаяся в количестве десятичных знаков после точки
      };
    }*/
  }

  render() {
    return (
      <div className="SpinnerInBlue">
        <input className="SpinnerInBlue-Decrement" type="button" value="-" onClick={(e)=>{this.decrement(e)}}/>
        <input className="SpinnerInBlue-Value" type="text" value={this.showValue()} onChange={(e)=>{this.change(e)}}/>
        <input className="SpinnerInBlue-Increment"type="button" value="+" onClick={(e)=>{this.increment(e)}}/>
      </div>
    );
  }
}

export default SpinnerInBlue;