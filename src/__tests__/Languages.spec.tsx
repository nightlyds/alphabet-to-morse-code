import React from "react";
import Languages from "../components/Languages";
import { shallow } from "enzyme";

let setUp = () => shallow(<Languages />);

describe("Languages tests", () => {
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
