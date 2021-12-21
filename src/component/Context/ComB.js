import React, { Component } from 'react'
import ComC from './ComC'
import UserContext from './UserContext'

export class ComB extends Component {

    static contextType = UserContext

    render() {
        return (
            <div>
                Component B context {this.context}
                <ComC />
            </div>
        )
    }
}

// ComB.contextType = UserContext

export default ComB
