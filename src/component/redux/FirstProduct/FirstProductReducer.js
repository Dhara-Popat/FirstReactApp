import { BUY_FIRST_PRODUCT } from "./FirstProductTypes"

const initialState = {
    numOfFirstProducts: 20
}

const firstProductReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_FIRST_PRODUCT:
            return {
                ...state,
                numOfFirstProducts: state.numOfFirstProducts - action.payload
            }
        default: return state    
    }
}

export default firstProductReducer