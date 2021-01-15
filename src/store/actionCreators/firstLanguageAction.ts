import { FirstLanguageTypes } from "../types";

const firstLanguageAction = (value: string): FirstLanguageTypes => ({
    type: "FIRST_LANGUAGE",
    firstLanguage: value,
});

export default firstLanguageAction;
