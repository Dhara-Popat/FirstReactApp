import React, { Component } from 'react'

export class Clickcounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    incrementCount = () => {
        this.setState(PrevState => {
            return {count: PrevState.count + 1}
        })
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <button onClick={this.incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default Clickcounter
