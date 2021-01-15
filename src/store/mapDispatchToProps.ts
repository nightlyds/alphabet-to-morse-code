/* eslint-disable func-names */
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import inputTextAction from "./actionCreators/inputTextAction";
import firstLanguageAction from "./actionCreators/firstLanguageAction";
import secondLanguageAction from "./actionCreators/secondLanguageAction";

function mapDispatchToProps(component: string) {
    switch (component) {
        case "INPUT_TEXT":
            return function (dispatch: Dispatch<AnyAction>) {
                return {
                    changeText: bindActionCreators(inputTextAction, dispatch),
                };
            };
        case "LANGUAGES":
            return function (dispatch: Dispatch<AnyAction>) {
                return {
                    changeFirstLanguage: bindActionCreators(
                        firstLanguageAction,
                        dispatch
                    ),
                    changeSecondLanguage: bindActionCreators(
                        secondLanguageAction,
                        dispatch
                    ),
                };
            };
        default:
            return undefined;
    }
}

export default mapDispatchToProps;
