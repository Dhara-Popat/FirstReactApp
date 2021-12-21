import React, { Component } from 'react'

export class UnMountingChild extends Component {

    componentWillUnmount(){
        alert("Component unmounted.")
    }

    render() {
        return (
            <div>
                <h4>Red</h4>
            </div>
        )
    }
}

export default UnMountingChild
