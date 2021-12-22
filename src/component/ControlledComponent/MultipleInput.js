import React, { Component } from 'react'

export class MultipleInput extends Component {
    state= {
        name: '',
        password: ''
    }

    handleChange = (e) => {
        // this.setState({ [e.target.name]: e.target.value })
        const value = e.target.name === "password" ?
        e.target.value.toUpperCase().substr(0,10) :
        e.target.value
        this.setState({ [e.target.name]: value })
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Username: 
                        <input 
                        type='text' 
                        name= 'name'
                        value={this.state.name} 
                        onChange={this.handleChange}/>
                    </label>
                    <br />
                    <br />
                    <label>
                        Password: 
                        <input 
                        type='password'
                        name= 'password' 
                        value={this.state.password} 
                        onChange={this.handleChange}/>
                    </label>
                </form>
            </div>
        )
    }
}

export default MultipleInput
