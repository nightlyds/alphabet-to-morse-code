import React from "react";
import Description from "../components/Description";
import { shallow } from "enzyme";

let setUp = () => shallow(<Description />);

describe("Description tests", () => {
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
