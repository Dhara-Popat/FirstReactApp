import React, { Component } from 'react'
import UnMountingChild from './UnMountingChild';

export class Unmouting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Show: true
        }
    }

    dltCom = () => {
        this.setState({Show: false});
    }
    
    render() {
        let com
        if(this.state.Show){
            com = <UnMountingChild />
        }
        return (
            <div>
               {com}
               <button type="button" onClick={this.dltCom}>Unmounting Component</button>
            </div>
        )
    }
}

export default Unmouting
