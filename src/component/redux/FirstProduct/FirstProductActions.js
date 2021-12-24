import { BUY_FIRST_PRODUCT } from "./FirstProductTypes"

export const buyFirstProduct = (number = 1) => {
    return {
        type: BUY_FIRST_PRODUCT,
        payload: number
    }
}