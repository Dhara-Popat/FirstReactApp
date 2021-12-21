import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

export class Clickcounter extends Component {
    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(Clickcounter)
