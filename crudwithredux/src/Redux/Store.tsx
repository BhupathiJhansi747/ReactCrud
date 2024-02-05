import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {Reducers} from "./Reducer";


const middleware=[thunk]
const rootreducer=combineReducers({
    service:Reducers,
})
const store=createStore(
    rootreducer,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;