import { combineReducers } from "redux";
import reducer from "./reducer";

const reducers = combineReducers({
    game: reducer,
})