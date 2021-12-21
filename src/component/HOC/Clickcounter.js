import React, { Component } from 'react'
import WithCounter from './WithCounter'

export class Clickcounter extends Component {
    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                {this.props.text}
                <button onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default WithCounter(Clickcounter, 5)
