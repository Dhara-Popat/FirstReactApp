import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyFirstProduct } from './index'

function HookFirstProduct() {

    const numOfFirstProducts = useSelector(state => state.firstProduct.numOfFirstProducts)

    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of First Products - {numOfFirstProducts} </h2>
            <button onClick={() => dispatch(buyFirstProduct())}>Buy First Products</button>
        </div>
    )
}

export default HookFirstProduct
