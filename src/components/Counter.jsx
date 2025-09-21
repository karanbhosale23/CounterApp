import React from 'react'
import './Counter.css'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }

        // bind methods (so `this` works)
        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
        this.resetCount = this.resetCount.bind(this)
    }

    increase() {
        this.setState(prev => ({ count: prev.count + 1 }))
    }

    decrease() {
        this.setState(prev => ({ count: prev.count - 1 }))
    }

    resetCount() {
        this.setState({ count: 0 })
    }

    render() {
        return (
            <div className="counter">
                <h1 id="count">{this.state.count}</h1>
                <div className="btns">
                    <button className="increase" onClick={this.increase}>Increase</button>
                    <button className="decrease" onClick={this.decrease}>Decrease</button>
                    <button className="reset" onClick={this.resetCount}>Reset</button>
                </div>
            </div>
        )
    }
}

export default Counter
