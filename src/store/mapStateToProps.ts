/* eslint-disable func-names */
type MapStateToPropsTypes = {
    inputTextReducer?: string;
    firstLanguageReducer?: string;
    secondLanguageReducer?: string;
};

function mapStateToProps(component: string) {
    switch (component) {
        case "TRANSLATED_TEXT":
            return function (state: MapStateToPropsTypes) {
                return {
                    inputText: state.inputTextReducer,
                };
            };
        case "LANGUAGES":
        case "INPUT_TEXT":
            return function (state: MapStateToPropsTypes) {
                return {
                    firstLanguage: state.firstLanguageReducer,
                    secondLanguage: state.secondLanguageReducer,
                };
            };

        default:
            return undefined;
    }
}

export default mapStateToProps;
