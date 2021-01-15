import { InputTextTypes } from "../types";

const inputTextAction = (value: string): InputTextTypes => ({
    type: "INPUT_TEXT",
    inputText: value,
});

export default inputTextAction;
