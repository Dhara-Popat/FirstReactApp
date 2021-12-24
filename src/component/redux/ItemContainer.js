import React from 'react'
import { connect } from 'react-redux'
import { buyFirstProduct, buySecondProduct } from '.'

function ItemContainer(props) {
    return (
        <div>
           <h2>Items - {props.item} </h2>
           <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
} 

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.firstProduct 
    ? state.firstProduct.numOfFirstProducts 
    : state.secondProduct.numOfSecondProducts

    return{
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.firstProduct
    ? () => dispatch(buyFirstProduct())
    : () => dispatch(buySecondProduct())

    return{
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
