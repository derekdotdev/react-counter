import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'


class CounterButton extends Component {

    // Define the initial state in a constructor
    // state => counter 0
    constructor() {
        super() // Don't forget super()!
        
        // not needed if arrow => employed on function
        // this.increment = this.increment.bind(this)
        // this.decrement = this.decrement.bind(this)
    }

    //render = () => {
    render() {
        return (
            <div className='counter'>
                <button id='add' onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button id='subtract' onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
                {/* <span className="count">{this.state.counter}</span> */}
            </div>
        )
    }

    //increment = () => {
    // increment() { // Update state - counter++
    //     // Update state (lifted up to Counter)
    //     // this.setState({
    //     //     counter: this.state.counter //+ this.props.by
    //     // });
    //     this.props.incrementMethod(this.props.by); 
    // }

    // decrement() {
    //     this.props.decrementMethod(this.props.by);
    // }

}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

export default CounterButton
