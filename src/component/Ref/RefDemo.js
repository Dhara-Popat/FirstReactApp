import React, { Component } from 'react'

export class RefDemo extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()

        this.cbRef = null // Old Method for Ref (it is callback ref)
        this.setCbRef = (element) => {
            this.cbRef = element
        }

        this.state = {
             
        }
    }

    componentDidMount(){
        // this.inputRef.current.focus()
        // console.log(this.inputRef)

        // for callback method
        if(this.cbRef){
            this.cbRef.focus()
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type='text' ref = {this.inputRef} />

                {/* Callback method for creating ref */}
                <input type='text' ref = {this.setCbRef} /> 

                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefDemo
