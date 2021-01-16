import EnglishMorseCharacters from "./EnglishMorseCharacters";
import UkraineMorseCharacters from "./UkraineMorseCharacters";
import RussiaMorseCharacters from "./RussiaMorseCharacters";
import SymbolsMorseCharacters from "./SymbolsMorseCharacters";

export function getKeyByValue(
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
    let vocablularyLanguage: Record<string, string>; // That`s the variable for using instead languages objects

    if (languageFrom === "ENG" || languageTo === "ENG") {
        vocablularyLanguage = EnglishMorseCharacters;
    } else if (languageFrom === "UK" || languageTo === "UK") {
        vocablularyLanguage = UkraineMorseCharacters;
    } else if (languageFrom === "RU" || languageTo === "RU") {
        vocablularyLanguage = RussiaMorseCharacters;
    }

    // The function is getting Morse code and is looking for the same in Object with keys
    function searchLetter(value: string): void {
        // Looking for characters in the English | Ukraine | Russian object
        Object.keys(vocablularyLanguage).forEach((valueCharacters: string) => {
            if (value === vocablularyLanguage[valueCharacters]) {
                morseCharacters.push(getKeyByValue(vocablularyLanguage, value));
                morseCharacters.push(" ");
            }
        });

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
        Object.keys(convertedToLowerCase).forEach(
            (_value: string, index: number) => {
                if (convertedToLowerCase[index] in vocablularyLanguage) {
                    morseCharacters.push(
                        vocablularyLanguage[convertedToLowerCase[index]]
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
                    morseCharacters.push(" ");
                }
            }
        );
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
