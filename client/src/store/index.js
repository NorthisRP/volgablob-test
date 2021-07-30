import { combineReducers, createStore } from "redux";
import { jsonReducer } from "./jsonReducer";
//import { loadingReducer } from "./loadingReducer";
const rootReducer = combineReducers({ jsonReducer });

export const store = createStore(rootReducer);
