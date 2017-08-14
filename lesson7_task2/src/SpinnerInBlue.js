import React from 'react';
import Spinner from './Spinner';
import './SpinnerInBlue.css';

class SpinnerInBlue extends Spinner {
  render() {
    return (
      <div className="SpinnerInBlue">
        <input className="SpinnerInBlue__Decrement" type="button" value="-" onClick={(e)=>{this.decrement(e)}}/>
        <input className="SpinnerInBlue__Value" type="text" value={this.showValue()} 
          onChange={(e)=>{this.change(e)}}
          onKeyDown={(e)=>{this.pressKey(e)}}
        />
        <input className="SpinnerInBlue__Increment"type="button" value="+" onClick={(e)=>{this.increment(e)}}/>
      </div>
    );
  }
}

export default SpinnerInBlue;