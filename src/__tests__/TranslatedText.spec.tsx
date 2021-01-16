import React from "react";
import { shallow } from "enzyme";
import TranslatedText from "../components/TranslatedText";

let setUp = () => shallow(<TranslatedText />);

describe("TranslatedText tests", () => {
    describe("Snapshot tests", () => {
        let component: any;

        beforeEach(() => {
            component = setUp();
        });

        it("Basic snapshot test", () => {
            expect(component).toMatchSnapshot();
        });
    });
});
