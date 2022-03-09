import React, { Component } from 'react'
import CounterButton from './CounterButton'
import ResetButton from './ResetButton'
import './Counter.css'

class Counter extends Component {
    
    constructor() {
        super()

        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
    }
    
    render() {
        return (
            <div>
                <h1>
                    Count!
                </h1>
                <div className="counter">
                    <CounterButton          incrementMethod={this.increment} decrementMethod={this.decrement}/>
                    <CounterButton by={5}   incrementMethod={this.increment} decrementMethod={this.decrement}/>
                    <CounterButton by={10}  incrementMethod={this.increment} decrementMethod={this.decrement}/>
                    <CounterButton by={100} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                    <span className='count'>{this.state.counter}</span>
                    <div><ResetButton resetCounterMethod={this.resetCounter}/></div>
                </div>
            </div>
        )
    }

    increment(by) { // Update state - counter++
        // Update state
        console.log(`increment from child = ${by}`)
        this.setState(
            (prevState) => {
            return {counter: prevState.counter + by}
        });
    }

    decrement(by) {
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - by}
            }
        );
    }

    resetCounter() {
        this.setState(
            () => {
                return {counter: 0}
            }
        );
    }

}

export default Counter
