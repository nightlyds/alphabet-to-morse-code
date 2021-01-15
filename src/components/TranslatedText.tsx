/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import mapStateToProps from "../store/mapStateToProps";
import mapDispatchToProps from "../store/mapDispatchToProps";

type TranslatedTextProps = {
    inputText?: string;
};

const TranslatedText = ({ inputText = "" }: TranslatedTextProps) => {
    const [translatedText, setTranslatedText] = useState<string>("");

    useEffect(() => {
        setTranslatedText(inputText);
    }, [inputText]);
    return (
        <div className="translated-text">
            <textarea
                className="input-text-textarea"
                disabled
                placeholder={translatedText}
            />
            <CopyToClipboard text={translatedText}>
                <span className="input-text-copy">Copy</span>
            </CopyToClipboard>
        </div>
    );
};

export default connect<any, any, TranslatedTextProps>(
    mapStateToProps("TRANSLATED_TEXT"),
    mapDispatchToProps("")
)(TranslatedText);
