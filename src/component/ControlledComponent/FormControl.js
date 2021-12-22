import React, { Component } from 'react'

export class FormControl extends Component {
    state= {
        name: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })       
    }

    handleSubmit = (e) => {
        console.log(e.target[1].value)
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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
                    <br />
                    <br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default FormControl
