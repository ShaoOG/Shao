import React from 'react'

export class Counter extends React.Component {
    state = {
        counter: 0,
    };


    constructor(props) {
        super(props);
        this.increaseCounter = this.increaseCounter.bind(this);
    }

    increaseCounter() {
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        return (
            <div>
                <button className='inc' onClick={this.increaseCounter}>increment</button>
                <h1>count : {this.state.counter}</h1>
            </div>
        );
    }
};

