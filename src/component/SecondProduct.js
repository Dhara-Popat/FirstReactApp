import React from 'react'
import { connect } from 'react-redux'
import { buySecondProduct } from './redux'


function SecondProduct(props) {
    return (
        <div>
            <h2>Number of Second Products - {props.numOfSecondProducts} </h2>
            <button onClick={props.buySecondProduct}>Buy Second Product</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfSecondProducts: state.secondProduct.numOfSecondProducts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buySecondProduct: () => dispatch(buySecondProduct())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondProduct)