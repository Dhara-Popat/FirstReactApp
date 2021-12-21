import React, { Component } from "react"

export class Updating extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             favoriteColor: "red"
        }
    }

    // static getDerivedStateFormProps(props, state){
    //     return { favoriteColor: props.favColor }
    // }

    // shouldComponentUpdate(){
    //     return false;
    // }

    // changeColor = () => {
    //     this.setState({favoriteColor : "blue"})
    // }

    componentDidMount(){
        setTimeout(() => {
            this.setState({favoriteColor: "blue"})
        }, 2000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("div1").innerHtml = 
        `The favorite color was ` + prevState.favoriteColor;
    }
    componentDidUpdate(){
        document.getElementById("div2").innerHTML = 
        `The favorite color is ` + this.state.favoriteColor;
    }
    
    render() {
        return (
            <div>
               <h1>My favorite color is {this.state.favoriteColor} </h1> 
               <button type="button" onClick={this.changeColor}> Change Color </button>
               <div id="div1"></div>
               <div id="div2"></div>
            </div>
        )
    }
}

export default Updating
