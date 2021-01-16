import React from "react";
import { shallow } from "enzyme";
import InputText from "../components/InputText";

let setUp = () => shallow(<InputText />);

describe("InputText tests", () => {
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
