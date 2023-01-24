import * as actionTypes from './actionTypes';

export const ADD =(product)=>{
    return{
        type: actionTypes.ADD_PRODUCT,
        payload: product
    }
}

// Remove Items 
export const REMOVE = (id) => {
    return{
        type: actionTypes.REMOVE_PRODUCT,
        payload: id
    }
}