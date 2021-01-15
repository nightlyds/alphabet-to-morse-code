import initialState from "../initialState";
import { FirstLanguageTypes } from "../types";

const firstLanguageReducer = (
    state = initialState.firstLanguage,
    action: FirstLanguageTypes
) => {
    switch (action.type) {
        case "FIRST_LANGUAGE":
            return action.firstLanguage;
        default:
            return state;
    }
};

export default firstLanguageReducer;
