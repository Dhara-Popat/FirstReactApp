import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ComC extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (UserName) => {
                     return <div>Hello, {UserName}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComC
