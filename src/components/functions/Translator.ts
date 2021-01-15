import EnglishMorseCharacters from "./EnglishMorseCharacters";
import UkraineMorseCharacters from "./UkraineMorseCharacters";
import RussiaMorseCharacters from "./RussiaMorseCharacters";
import SymbolsMorseCharacters from "./SymbolsMorseCharacters";

function getKeyByValue(
    object: Record<string, string>,
    value: string | undefined
) {
    return Object.keys(object).find(key => object[key] === value);
}

export default function Translator(
    languageFrom: string,
    languageTo: string,
    text: string
): string {
    let translation: string = ""; // This one for convert array to string and return that on the out
    const morseCharacters: Array<string | undefined> = []; // The array with a result
    let characterFromText: Array<string> = []; // Array for one character from '.' and '-' elements

    // The function is getting Morse code and is looking for the same in Object with keys
    function searchLetter(value: string): void {
        // Looking for characters in the English | Ukraine | Russian object

        if (languageTo === "ENG") {
            Object.keys(EnglishMorseCharacters).forEach(
                (valueCharacters: string) => {
                    if (value === EnglishMorseCharacters[valueCharacters]) {
                        morseCharacters.push(
                            getKeyByValue(EnglishMorseCharacters, value)
                        );
                        morseCharacters.push(" ");
                    }
                }
            );
        } else if (languageTo === "UK") {
            Object.keys(UkraineMorseCharacters).forEach(
                (valueCharacters: string) => {
                    if (value === UkraineMorseCharacters[valueCharacters]) {
                        morseCharacters.push(
                            getKeyByValue(UkraineMorseCharacters, value)
                        );
                        morseCharacters.push(" ");
                    }
                }
            );
        } else if (languageTo === "RU") {
            Object.keys(RussiaMorseCharacters).forEach(
                (valueCharacters: string) => {
                    if (value === RussiaMorseCharacters[valueCharacters]) {
                        morseCharacters.push(
                            getKeyByValue(RussiaMorseCharacters, value)
                        );
                        morseCharacters.push(" ");
                    }
                }
            );
        }

        // Looking for characters in the Symbols object
        Object.keys(SymbolsMorseCharacters).forEach(
            (valueCharacters: string) => {
                if (value === SymbolsMorseCharacters[valueCharacters]) {
                    morseCharacters.push(
                        getKeyByValue(SymbolsMorseCharacters, value)
                    );
                    morseCharacters.push(" ");
                }
            }
        );

        characterFromText = []; // After every character refull the array
    }

    // Translator from English | Ukraine | Russia to Morse code
    if (languageTo === "MORSE") {
        // Prepare text to lowercase
        const convertedToLowerCase: string = text.toLowerCase();

        // Search in Object with letters keys for codes and add this in array
        if (languageFrom === "ENG") {
            Object.keys(convertedToLowerCase).forEach(
                (_value: string, index: number) => {
                    if (convertedToLowerCase[index] in EnglishMorseCharacters) {
                        morseCharacters.push(
                            EnglishMorseCharacters[convertedToLowerCase[index]]
                        );
                        morseCharacters.push(" "); // After every Morse letter add some space
                    } else if (
                        convertedToLowerCase[index] in SymbolsMorseCharacters
                    ) {
                        morseCharacters.push(
                            SymbolsMorseCharacters[convertedToLowerCase[index]]
                        );
                    }
                }
            );
        } else if (languageFrom === "UK") {
            Object.keys(convertedToLowerCase).forEach(
                (_value: string, index: number) => {
                    if (convertedToLowerCase[index] in UkraineMorseCharacters) {
                        morseCharacters.push(
                            UkraineMorseCharacters[convertedToLowerCase[index]]
                        );
                        morseCharacters.push(" "); // After every Morse letter add some space
                    } else if (
                        convertedToLowerCase[index] in SymbolsMorseCharacters
                    ) {
                        morseCharacters.push(
                            SymbolsMorseCharacters[convertedToLowerCase[index]]
                        );
                    }
                }
            );
        } else if (languageFrom === "RU") {
            Object.keys(convertedToLowerCase).forEach(
                (_value: string, index: number) => {
                    if (convertedToLowerCase[index] in RussiaMorseCharacters) {
                        morseCharacters.push(
                            RussiaMorseCharacters[convertedToLowerCase[index]]
                        );
                        morseCharacters.push(" "); // After every Morse letter add some space
                    } else if (convertedToLowerCase[index] === "ё") {
                        morseCharacters.push("."); // For Russian 'е' and 'ё' use the same character
                        morseCharacters.push(" "); // After every Morse letter add some space
                    } else if (
                        convertedToLowerCase[index] in SymbolsMorseCharacters
                    ) {
                        morseCharacters.push(
                            SymbolsMorseCharacters[convertedToLowerCase[index]]
                        );
                    }
                }
            );
        }
    } else if (languageFrom === "MORSE") {
        // Add to the array '.' and '-' till space doens`t appear
        Object.keys(text).forEach((_valueText: string, indexText: number) => {
            if (text[indexText] !== " ") {
                characterFromText.push(text[indexText]);
            }
            if (text[indexText] === " ") {
                searchLetter(characterFromText.join(""));
            }
        });
    }
    translation = morseCharacters.join(""); // Convert the array to the string
    return translation;
}
