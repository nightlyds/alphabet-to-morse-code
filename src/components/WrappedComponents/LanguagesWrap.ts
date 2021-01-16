import { connect } from "react-redux";
import Languages, { LanguagesProps } from "../Languages";
import mapStateToProps from "../../store/mapStateToProps";
import mapDispatchToProps from "../../store/mapDispatchToProps";

const LanguagesWrap = connect<any, any, LanguagesProps>(
    mapStateToProps("LANGUAGES"),
    mapDispatchToProps("LANGUAGES")
)(Languages);

export default LanguagesWrap;
