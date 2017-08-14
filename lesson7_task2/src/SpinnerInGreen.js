import React from 'react';
import Spinner from './Spinner';
import './SpinnerInGreen.css';

class SpinnerInGreen extends Spinner {
  render() {
    return (
      <div className="SpinnerInGreen">
        <input className="SpinnerInGreen__Decrement" type="button" value="\/" onClick={(e)=>{this.decrement(e)}}/>
        <input className="SpinnerInGreen__Value" type="text" value={this.showValue()}
          onChange={(e)=>{this.change(e)}}
          onKeyDown={(e)=>{this.pressKey(e)}}
        />
        <input className="SpinnerInGreen__Increment"type="button" value="/\" onClick={(e)=>{this.increment(e)}}/>
      </div>
    );
  }
}

export default SpinnerInGreen;