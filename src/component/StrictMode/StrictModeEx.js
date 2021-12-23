import React, { Component } from 'react'

export class StrictModeEx extends Component {

    componentWillMount(){
        console.log("Strict Mode")
    }

    render() {
        return (
            <div>
                Hello User
            </div>
        )
    }
}

export default StrictModeEx
