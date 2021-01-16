import { connect } from "react-redux";
import TranslatedText, { TranslatedTextProps } from "../TranslatedText";
import mapStateToProps from "../../store/mapStateToProps";
import mapDispatchToProps from "../../store/mapDispatchToProps";

const TranslatedTextWrap = connect<any, any, TranslatedTextProps>(
    mapStateToProps("TRANSLATED_TEXT"),
    mapDispatchToProps("")
)(TranslatedText);

export default TranslatedTextWrap;
