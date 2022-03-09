import React, { Component } from 'react'
import './Counter.css'

class ResetButton extends Component {

    constructor() {
        super() // Don't forget super()!
        
        // not needed if arrow => employed on function
        // this.resetCounter = this.resetCounter.bind(this)
    }

    render() {
        return (
            <div>
                <button id='reset' onClick={this.props.resetCounterMethod}>Reset Me</button>
            </div>
        );
    }

    // resetCounter() {
    //     this.props.resetCounterMethod();
    // }
}

export default ResetButton
