import React, { Component } from 'react'

export class TextArea extends Component {
    state = {
        value: 'Hello'
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value.substr(0,100)
        })
    }
    
    render() {
        return (
            <div>
                <form>
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default TextArea
