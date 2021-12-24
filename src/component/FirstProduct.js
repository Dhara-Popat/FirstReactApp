import React from 'react'
import { connect } from 'react-redux'
import { buyFirstProduct } from './redux'

function FirstProduct(props) {
    return (
        <div>
            <h2>Number of First Products - {props.numOfFirstProducts} </h2>
            <button onClick={props.buyFirstProduct}>Buy First Product</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfFirstProducts: state.firstProduct.numOfFirstProducts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyFirstProduct: () => dispatch(buyFirstProduct())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstProduct)
