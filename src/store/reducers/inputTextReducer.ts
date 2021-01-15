import initialState from "../initialState";
import { InputTextTypes } from "../types";

const inputTextReducer = (
    state = initialState.inputText,
    action: InputTextTypes
) => {
    switch (action.type) {
        case "INPUT_TEXT":
            return action.inputText;
        default:
            return state;
    }
};

export default inputTextReducer;
