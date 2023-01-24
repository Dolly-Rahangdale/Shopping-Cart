import {combineReducers} from "redux";
import { productReducer } from "./reducers";

const shoppingApp = combineReducers({
    productReducer
});

export default shoppingApp;