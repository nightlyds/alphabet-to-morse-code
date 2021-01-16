import React from "react";
import { shallow } from "enzyme";
import TranslatorPage from "../TranslatorPage";

let setUp = () => shallow(<TranslatorPage />);

describe("Translator tests", () => {
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
