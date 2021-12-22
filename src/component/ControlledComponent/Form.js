import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: ""
        }
    }

    handleChange = (e) => {
        // console.log(e.target.value);
        this.setState({value: e.target.value.toUpperCase().substr(0, 10)});
    }
    
    render() {
        return (
            <div>
                <form>
                    <h2>Controlled Component</h2>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default Form
