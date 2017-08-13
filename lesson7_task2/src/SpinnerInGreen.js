import React from 'react';
import Spinner from './Spinner';
import './SpinnerInGreen.css';

class SpinnerInGreen extends Spinner {

  constructor(props){
    super();
  //  if(props === undefined){
      this.state = {
        value: 0,         // Искомое число
        min: -5,          // Минимальное значение числа
        max: 20,          // Максимальное значение числа
        step: 0.5,        // Шаг изменения числа кнопками
        multiple: 0.1,    // Число должно без остатка делиться на данную величину
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
      <div className="SpinnerInGreen">
        <input className="SpinnerInGreen-Decrement" type="button" value="\/" onClick={(e)=>{this.decrement(e)}}/>
        <input className="SpinnerInGreen-Value" type="text" value={this.showValue()}
          onChange={(e)=>{this.change(e)}}
          onKeyDown={(e)=>{this.pressKey(e)}}
        />
        <input className="SpinnerInGreen-Increment"type="button" value="/\" onClick={(e)=>{this.increment(e)}}/>
      </div>
    );
  }
}

export default SpinnerInGreen;