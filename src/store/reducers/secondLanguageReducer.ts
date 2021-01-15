import initialState from "../initialState";
import { SecondLanguageTypes } from "../types";

const secondLanguageReducer = (
    state = initialState.secondLanguage,
    action: SecondLanguageTypes
) => {
    switch (action.type) {
        case "SECOND_LANGUAGE":
            return action.secondLanguage;
        default:
            return state;
    }
};

export default secondLanguageReducer;
