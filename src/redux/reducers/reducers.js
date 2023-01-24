const INIT_STATE = {
    carts : []
};

export const productReducer = (state=INIT_STATE, action)=>{
    switch(action.type){
        case "ADD_PRODUCT":
        
            const ProductIndex = state.carts.findIndex((prod)=> prod.id === action.payload.id);
            
            if(ProductIndex >= 0 ){
                state.carts[ProductIndex].quantity += 1
            }
            else{
                const temp = {...action.payload, quantity: 1}
                return{
                    ...state,
                    carts:[...state.carts, temp] 
                }
            }
        
            // return {
            //     ...state,
            //     carts:[...state.carts, action.payload]                
            // }

        case "REMOVE_PRODUCT":
            const data = state.carts.filter((ele)=> ele.id !== action.payload)

            return {
                ...state,
                carts: data
            }
        default:
            return state
    }
} 