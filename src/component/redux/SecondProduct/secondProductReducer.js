import { BUY_SECOND_PRODUCT } from "./secondProductTypes"

const initialState = {
    numOfSecondProducts: 10
}

const secondProductReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_SECOND_PRODUCT:
            return {
                ...state,
                numOfSecondProducts: state.numOfSecondProducts- 1
            }
        default: return state    
    }
}

export default secondProductReducer