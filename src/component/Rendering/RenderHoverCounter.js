import React, { Component } from 'react'

export class RenderHoverCounter extends Component {
    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
               <h4 onMouseOver={incrementCount}>Hovered {count} times </h4> 
            </div>
        )
    }
}

export default RenderHoverCounter
