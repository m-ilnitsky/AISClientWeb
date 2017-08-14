import React, { Component } from 'react';

class Spinner extends Component {

  constructor(props){
    super(props);
    this.state = {
        value: props.value,        // Искомое число, в данном случае его начальное значение
        min: props.min,            // Минимальное значение числа
        max: props.max,            // Максимальное значение числа
        step: props.step,          // Шаг изменения числа кнопками, должно быть кратно и больше или равно шагу квантования
        multiple: props.multiple,  // Шаг квантования числа, число должно без остатка делиться на данную величину
        digits: props.digits       // Точность вычисления числа выражающаяся в количестве десятичных знаков после точки
    };
  }

  numDigits(value){
    var strValue = value.toString();
    var index = strValue.indexOf(".");

    if(index < 0) return 0;

    return strValue.length - index - 1;
  }

  cutOff(value){
    var strValue = value.toString();
    var index = strValue.indexOf(".");
    var maxLength = index + this.state.digits + 1;

    if(this.numDigits(value) > maxLength){
      var shift = 0.5 * Math.pow(10, -this.state.digits);
      var newValue;
      if(value >= 0) {
        newValue = value + shift;
      }else{
        newValue = value - shift;
      }

      return +(newValue.toString().substring(0, maxLength));
    }else{
      return value;
    }
  }

  check(value){
    var newValue;

    if(typeof(value) === 'string'){
      newValue = parseFloat(value.replace(',', '.'), 10);
    }else if(typeof(value) === 'number'){
      newValue = value;
    }
    
    if(isNaN(newValue)){
      newValue = this.state.value;
    }else{
      if(newValue > this.state.max){
        newValue = this.state.max;
      }else if(newValue < this.state.min){
        newValue = this.state.min;
      }
      
      newValue = this.cutOff(newValue);
      
      var remainder = newValue % this.state.multiple;
      if((this.state.multiple - Math.abs(remainder)) > Math.pow(10, -this.state.digits)){
        newValue = newValue - remainder;
      }
      console.info(newValue + ' % ' + this.state.multiple +' = ' + remainder);

      this.setState({value: newValue});
    }
  }

  showValue(){
    var strValue = this.state.value.toString();
    var indValue = strValue.indexOf(".");

    var numDigitsValue = this.numDigits(this.state.value);
    var numDigits = Math.max(this.numDigits(this.state.step), this.numDigits(this.state.multiple));

    var output = strValue;

    if(numDigits > 0 && numDigits > numDigitsValue){
      if(indValue === -1){
        output = strValue + "." + (new Array(numDigits + 1)).join("0");
      }else{
        output = strValue + (new Array(numDigits - numDigitsValue + 1)).join("0");
      }
    }else if(numDigitsValue > numDigits){
      if(numDigits > 0){
        output = strValue.substring(0, indValue + numDigits + 1);
      }else{
        output = strValue.substring(0, indValue);
      }
    }

    console.info(strValue);
    console.info(numDigits);
    console.info(numDigitsValue);
    console.info(output);

    return output;
  }

  increment(){
    this.check(+this.state.value + this.state.step);
  }

  decrement(){
    this.check(+this.state.value - this.state.step);
  }

  change(e){
    this.check(e.target.value);
  }

  pressKey(e){
    if(e.keyCode === 38){
      this.check(+this.state.value + this.state.step);
    }else if(e.keyCode === 40){
      this.check(+this.state.value - this.state.step);
    }
  }
  
  render() {
    return (
      <div className="Spinner">
        <input className="Spinner-Decrement" type="button" value="-" onClick={(e)=>{this.decrement(e)}}/>
        <input className="Spinner-Value" type="text" value={this.showValue()}
          onChange={(e)=>{this.change(e)}}
          onKeyDown={(e)=>{this.pressKey(e)}}
        />
        <input className="Spinner-Increment"type="button" value="+" onClick={(e)=>{this.increment(e)}}/>
      </div>
    );
  }
}

export default Spinner;