import React from 'react' 

// WithCounter is Updated component and wrappedCoponent is also Original Component.
const WithCounter = (WrappedComponent, incrementNumber) => {

    // New component also written in Pascal case.
    class WithCounter extends React.Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
    
        incrementCount = () => {
            this.setState(PrevState => {
                return {count: PrevState.count + incrementNumber }
            })
        }

        render(){
            return <WrappedComponent 
            count = {this.state.count} 
            incrementCount = {this.incrementCount}
            {...this.props} 
            />
        }

    }
    return WithCounter // return New Component
}

export default WithCounter