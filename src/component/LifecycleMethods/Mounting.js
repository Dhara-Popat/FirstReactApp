import React, { Component } from 'react'

export class Mounting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             favoriteColor: "red"
        }
    }

    // static getDerivedStateFromProps(props, state){
    //     return { favoriteColor : props.favColor }
    // }

    componentDidMount(){
        setTimeout(() => {
            this.setState({ favoriteColor: "blue" })
        }, 2000)
    }
    
    render() {
        return (
            <div>
                <h1>My favorite is {this.state.favoriteColor} </h1>
            </div>
        )
    }
}

export default Mounting
