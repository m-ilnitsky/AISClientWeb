import React from 'react';
import Spinner from './Spinner';
import './SpinnerInGrey.css';

class SpinnerInGray extends Spinner {
  render() {
    return (
      <div className="SpinnerInGrey">
        <input className="SpinnerInGrey__Decrement" type="button" value="<" onClick={(e)=>{this.decrement(e)}}/>
        <input className="SpinnerInGrey__Value" type="text" value={this.showValue()} 
          onChange={(e)=>{this.change(e)}}
          onKeyDown={(e)=>{this.pressKey(e)}}
        />
        <input className="SpinnerInGrey__Increment"type="button" value=">" onClick={(e)=>{this.increment(e)}}/>
      </div>
    );
  }
}

export default SpinnerInGray;