"use strict";
exports.__esModule = true;
exports.RegisterSelectors = exports.LoginSelectors = void 0;
exports.LoginSelectors = {
    username_input: "//input[@name='username']",
    password_input: "//input[@name='password']",
    login_button: "//button[@type='Submit']",
    signup_link: "//span[contains(text(),'Sign up')]"
};
exports.RegisterSelectors = {
    emailOrPhone_input: 'input[aria-label="Mobile Number or Email"]',
    fullName_input: 'input[aria-label="Full Name"]',
    username_input: 'input[aria-label="Username"]',
    password_input: 'input[aria-label="Password"]',
    signup_button: 'text="Sign up"'
};
