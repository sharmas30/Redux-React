import { ADD_TO_CART, REMOVE_TO_CART } from '../constant'
export const addToCart = (data) => {
    console.log("ACTION ", data)
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const removeToCart = () => {
    console.log("ACTION REMOVE__ ")
    return {
        type: REMOVE_TO_CART,
    }
}