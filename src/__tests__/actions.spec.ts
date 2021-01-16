import inputTextAction from "../store/actionCreators/inputTextAction";
import firstLanguageAction from "../store/actionCreators/firstLanguageAction";
import secondLanguageAction from "../store/actionCreators/secondLanguageAction";

describe("Actions tests", () => {
    it("inputTextAction test", () => {
        const expectedAction = {
            type: "INPUT_TEXT",
            inputText: "abra-ka-da-bra",
        };

        expect(inputTextAction("abra-ka-da-bra")).toEqual(expectedAction);
    });

    it("firstLanguageAction test", () => {
        const expectedAction = {
            type: "FIRST_LANGUAGE",
            firstLanguage: "tra-xti-bida-xti-bida-xti-bidox",
        };

        expect(firstLanguageAction("tra-xti-bida-xti-bida-xti-bidox")).toEqual(
            expectedAction
        );
    });

    it("secondLanguageAction test", () => {
        const expectedAction = {
            type: "SECOND_LANGUAGE",
            secondLanguage: "sim-sim-vidkruysya",
        };

        expect(secondLanguageAction("sim-sim-vidkruysya")).toEqual(
            expectedAction
        );
    });
});
