/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

const Description: React.FC = () => {
    const [description, setDescription] = useState<boolean>(false);
    return (
        <div className="description">
            <div className="description-link">
                <span
                    className="description-link-text"
                    onClick={() => setDescription(!description)}
                >
                    Description
                    <FontAwesomeIcon
                        icon={!description ? faChevronDown : faChevronUp}
                        className="description-link-text-icon"
                    />
                </span>
            </div>
            {description && (
                <div>
                    <div className="description-detailed">
                        <h1 className="description-title">
                            Morse Code Translator
                        </h1>
                        <p className="description-text">
                            That`s Morse code translator. You can translate
                            English | Ukraine | Russia languages to Morse code
                            and back. Just type words or symbols on your
                            language into the first field and get the
                            translation of that in the another one, also if you
                            want type Morse code, you have to make in this way:
                            type one Morse code charater and put on space, just
                            like this: &apos;.---- ..--- ...--&apos;. I hope you
                            like it, have fun!
                        </p>
                    </div>
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default Description;
