import { combineReducers, createStore } from "redux";
import bookReduecer from "./reducers/book"
const rootReduce = combineReducers({bookReduecer})
const store = createStore(rootReduce)
export default store