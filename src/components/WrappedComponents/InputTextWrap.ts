import { connect } from "react-redux";
import InputText, { InputTextProps } from "../InputText";
import mapStateToProps from "../../store/mapStateToProps";
import mapDispatchToProps from "../../store/mapDispatchToProps";

const InputTextWrap = connect<any, any, InputTextProps>(
    mapStateToProps("INPUT_TEXT"),
    mapDispatchToProps("INPUT_TEXT")
)(InputText);

export default InputTextWrap;
