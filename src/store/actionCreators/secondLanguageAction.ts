import { SecondLanguageTypes } from "../types";

const secondLanguageAction = (value: string): SecondLanguageTypes => ({
    type: "SECOND_LANGUAGE",
    secondLanguage: value,
});

export default secondLanguageAction;
