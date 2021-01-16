import inputTextReducer from "../store/reducers/inputTextReducer";
import firstLanguageReducer from "../store/reducers/firstLanguageReducer";
import secondLanguageReducer from "../store/reducers/secondLanguageReducer";
import initialState from "../store/initialState";

describe("Reducers tests", () => {
    it("inputTextReducer test", () => {
        const action = {
            type: "INPUT_TEXT",
            inputText: "abra-ka-da-bra",
        };

        expect(inputTextReducer("", action)).toEqual("abra-ka-da-bra");
    });

    it("inputTextReducer should return default value", () => {
        expect(
            inputTextReducer(undefined, { type: "", inputText: "" })
        ).toEqual(initialState.inputText);
    });

    it("firstLanguageReducer test", () => {
        const action = {
            type: "FIRST_LANGUAGE",
            firstLanguage: "tra-xti-bida-xti-bida-xti-bidox",
        };

        expect(firstLanguageReducer("", action)).toEqual(
            "tra-xti-bida-xti-bida-xti-bidox"
        );
    });

    it("firstLanguageReducer should return default value", () => {
        expect(
            firstLanguageReducer(undefined, { type: "", firstLanguage: "" })
        ).toEqual(initialState.firstLanguage);
    });

    it("secondLanguageReducer test", () => {
        const action = {
            type: "SECOND_LANGUAGE",
            secondLanguage: "sim-sim-vidkruysya",
        };

        expect(secondLanguageReducer("", action)).toEqual("sim-sim-vidkruysya");
    });

    it("secondLanguageReducer should return default value", () => {
        expect(
            secondLanguageReducer(undefined, { type: "", secondLanguage: "" })
        ).toEqual(initialState.secondLanguage);
    });
});
