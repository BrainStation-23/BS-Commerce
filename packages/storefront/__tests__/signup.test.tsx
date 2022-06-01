import React from "react";
import { MemoryRouter } from "react-router-dom";
import  { render} from "@testing-library/react";
import { screen } from "@testing-library/dom";

import SignUp from "../components/account/sign-up"

describe('Testing the first my test', () => {
    const wrapperComponent = () => (
        <MemoryRouter>
            <SignUp/>
        </MemoryRouter>
    );

    it('should present sign up button', () => {
        render(wrapperComponent());
        const signupBtn = screen.getByText(/sign up/i);
        // screen.debug();
        screen.debug(signupBtn);
        expect(signupBtn).toBeTruthy();
    });
});