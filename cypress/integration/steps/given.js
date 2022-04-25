

import { Given } from "cypress-cucumber-preprocessor/steps";

Given('I search for {string}', (value) => {
  cy.getResults(value)
})