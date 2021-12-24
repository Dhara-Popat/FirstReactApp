import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyFirstProduct } from './FirstProduct/FirstProductActions'

function NewFirstProduct(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of First Products - {props.numOfFirstProducts} </h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyFirstProduct(number)}>Buy {number} Product</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfFirstProducts: state.firstProduct.numOfFirstProducts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyFirstProduct: (number) => dispatch(buyFirstProduct(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewFirstProduct)