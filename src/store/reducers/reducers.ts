import { combineReducers } from "redux";
import inputTextReducer from "./inputTextReducer";
import firstLanguageReducer from "./firstLanguageReducer";
import secondLanguageReducer from "./secondLanguageReducer";

const reducers = combineReducers({
    inputTextReducer,
    firstLanguageReducer,
    secondLanguageReducer,
});

export default reducers;
