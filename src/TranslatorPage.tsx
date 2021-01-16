import React from "react";
import InputTextWrap from "./components/WrappedComponents/InputTextWrap";
import LanguagesWrap from "./components/WrappedComponents/LanguagesWrap";
import TranslatedTextWrap from "./components/WrappedComponents/TranslatedTextWrap";
import Description from "./components/Description";

const TranslatorPage: React.FC = () => {
    return (
        <div className="translator">
            <LanguagesWrap />
            <div className="translator-field">
                <InputTextWrap />
                <TranslatedTextWrap />
            </div>
            <Description />
        </div>
    );
};

export default TranslatorPage;
