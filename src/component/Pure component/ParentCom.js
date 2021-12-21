import React, { Component } from 'react'
import PureComp from './PureComp'
import RegCom from './RegCom'

export class ParentCom extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "User Name"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "User Name"
            })
        }, 2000)
    }

    render() {
        console.log("----- Parent Component -----")
        return (
            <div>
                Parent Component
                <RegCom name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentCom
