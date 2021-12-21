import React, { Component } from 'react'
import ComB from './ComB'

export class ComA extends Component {
    render() {
        return (
            <div>
               <ComB />
            </div>
        )
    }
}

export default ComA
