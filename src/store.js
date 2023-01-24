import { createStore } from "redux";
import shoppingApp  from "./redux/reducers/index";
import storage from  "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
// import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, shoppingApp)

const store = createStore(
    persistedReducer
);

// const store = createStore(
//     shoppingApp
// );

export const persistor = persistStore(store)
export default store;