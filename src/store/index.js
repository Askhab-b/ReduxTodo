import { combineReducers, createStore } from "redux";
import { customerReducer } from "./customerReducer";



const rootReducer = combineReducers({
customers: customerReducer,
})

export const store = createStore(rootReducer);
