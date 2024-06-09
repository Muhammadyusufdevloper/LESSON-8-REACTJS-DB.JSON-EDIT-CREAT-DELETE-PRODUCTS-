import { combineReducers, legacy_createStore } from "redux";
import { counter } from "./reducers/reducers";

const reducers = combineReducers({
    counter
})
export const store = legacy_createStore(reducers)