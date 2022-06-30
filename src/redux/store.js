import { applyMiddleware, createStore } from "redux";
import reducers, { initial_state } from "./reducers/reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, initial_state, applyMiddleware(thunk));

export default store;
