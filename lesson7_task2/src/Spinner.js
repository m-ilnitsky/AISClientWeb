import React, { Component } from 'react';

class Spinner extends Component {
  render() {
    return (
        <div className="Spinner">
            <input type="button" value="-"/>
            <input type="text"/>
            <input type="button" value="+"/>
        </div>
    );
  }
}

export default Spinner;