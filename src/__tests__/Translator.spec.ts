import Translator, { getKeyByValue } from "../functions/Translator";

describe("Translator tests", () => {
    it("Translator ENG to MORSE test", () => {
        expect(Translator("ENG", "MORSE", "HELLO WORLD!")).toBe(
            ".... . .-.. .-.. --- .-- --- .-. .-.. -.. -.-.-- "
        );
    });

    it("Translator UK to MORSE test", () => {
        expect(Translator("UK", "MORSE", "Привіт!")).toBe(
            ".--. .-. -.-- .-- .. - -.-.-- "
        );
    });

    it("Translator RU to MORSE test", () => {
        expect(Translator("RU", "MORSE", "Как дела?")).toBe(
            "-.- .- -.- -.. . .-.. .- ..--.. "
        );
    });

    it("Translator MORSE to ENG test", () => {
        expect(
            Translator(
                "MORSE",
                "ENG",
                ".... . .-.. .-.. --- .-- --- .-. .-.. -.. -.-.-- "
            )
        ).toBe("h e l l o w o r l d ! ");
    });

    it("Translator MORSE to RU test", () => {
        expect(
            Translator("MORSE", "UK", ".--. .-. -.-- .-- .. - -.-.-- ")
        ).toBe("п р и в і т ! ");
    });

    it("Translator MORSE to RU test", () => {
        expect(
            Translator("MORSE", "RU", "-.- .- -.- -.. . .-.. .- ..--.. ")
        ).toBe("к а к д е л а ? ");
    });

    it("Translator undefined value test", () => {
        expect(Translator("ENG", "MORSE", "Це не є англійські букви")).toBe("");
    });

    it("getKeyByValue test", () => {
        let object = {
            a: "1",
            b: "2",
            c: "3",
        };

        expect(getKeyByValue(object, "1")).toBe("a");
    });

    it("getKeyByValue undefined value test", () => {
        let object = {
            a: "1",
            b: "2",
            c: "3",
        };

        expect(getKeyByValue(object, undefined)).toBe(undefined);
    });
});
