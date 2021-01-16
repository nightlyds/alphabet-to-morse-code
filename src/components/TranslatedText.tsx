/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export type TranslatedTextProps = {
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
                className="translated-text-textarea"
                disabled
                placeholder={translatedText}
            />
            <div className="translated-text-copy">
                <CopyToClipboard text={translatedText}>
                    <span className="translated-text-copy-link">Copy</span>
                </CopyToClipboard>
            </div>
        </div>
    );
};

export default TranslatedText;
