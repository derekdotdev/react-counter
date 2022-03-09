import React, { Component } from 'react';

// Class Component must extend Component and Override render()
// Class Componenets have additional features 
// when compared to functional components:
// - State
export default class FirstComponent extends Component {
    render() {
      return (
        <div className="firstComponent">
         <p>
          FirstComponent
         </p>
        </div>
      );
    }
  }
