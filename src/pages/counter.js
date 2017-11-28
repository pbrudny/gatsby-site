import React from 'react';
import Link from 'gatsby-link';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    increment(event) {
        this.setState({ counter: this.state.counter + 1});
    }

    decrement(event) {
        this.setState({ counter: this.state.counter - 1});
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <p>Current count: {this.state.counter}</p>
                <button onClick={this.increment.bind(this)}>+</button>
                <button onClick={this.decrement.bind(this)}>-</button>
            </div>
        )
    }
}

export default Counter;