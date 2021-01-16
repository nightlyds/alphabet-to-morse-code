/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";

export type LanguagesProps = {
    changeFirstLanguage?: (value: string) => void;
    changeSecondLanguage?: (value: string) => void;
    firstLanguage?: string;
    secondLanguage?: string;
};

const Languages = ({
    changeFirstLanguage = () => {},
    changeSecondLanguage = () => {},
    firstLanguage = "ENG",
    secondLanguage = "MORSE",
}: LanguagesProps) => {
    function setFirstLanguage(
        event: React.ChangeEvent<HTMLSelectElement>
    ): void {
        const {
            target: { value },
        } = event;
        changeFirstLanguage(value);
    }
    function setSecondLanguage(
        event: React.ChangeEvent<HTMLSelectElement>
    ): void {
        const {
            target: { value },
        } = event;
        changeSecondLanguage(value);
    }
    return (
        <div className="languages">
            <select
                name="languages-list-first"
                className="languages-list-first"
                onChange={e => setFirstLanguage(e)}
            >
                <option value="ENG" disabled={secondLanguage !== "MORSE"}>
                    ENG
                </option>
                <option value="UK" disabled={secondLanguage !== "MORSE"}>
                    UK
                </option>
                <option value="RU" disabled={secondLanguage !== "MORSE"}>
                    RU
                </option>
                <option value="MORSE">MORSE</option>
            </select>
            <select
                name="languages-list-second"
                className="languages-list-second"
                onChange={e => setSecondLanguage(e)}
            >
                <option value="MORSE">MORSE</option>
                <option value="ENG" disabled={firstLanguage !== "MORSE"}>
                    ENG
                </option>
                <option value="UK" disabled={firstLanguage !== "MORSE"}>
                    UK
                </option>
                <option value="RU" disabled={firstLanguage !== "MORSE"}>
                    RU
                </option>
            </select>
        </div>
    );
};

export default Languages;
