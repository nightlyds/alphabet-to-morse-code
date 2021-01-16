/* eslint-disable react/require-default-props */
import React from "react";
import Translator from "../functions/Translator";

export type InputTextProps = {
    changeText?: (value: string) => void;
    firstLanguage?: string;
    secondLanguage?: string;
};

const InputText = ({
    changeText = () => {},
    firstLanguage = "ENG",
    secondLanguage = "MORSE",
}: InputTextProps) => {
    const textAreaChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ): void => {
        const {
            target: { value },
        } = event;

        const valueInString = `${value}`;

        changeText(Translator(firstLanguage, secondLanguage, valueInString));
    };
    return (
        <div className="input-text">
            <textarea
                className="input-text-textarea"
                onChange={e => textAreaChange(e)}
                placeholder="Type your text here.."
            />
        </div>
    );
};

export default InputText;
