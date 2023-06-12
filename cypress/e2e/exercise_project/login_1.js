/// <reference types="Cypress" />


const tests = require("../../fixtures//example_arr.json");

describe("Data Driven Test reading data from a JSON file", function () {
  beforeEach(function () {
    cy.visit("/");
  });

  tests.forEach((test) => {
    it(test.test_name, function () {
      cy.get('[data-test="username"]').type(test.user_name);
      cy.get('[data-test="password"]').type(test.password);
      cy.get('[data-test="login-button"]').click();

      if (test.test_name === "negative_test") {
          cy.xpath("//h3[@data-test='error']").should(
            "have.text",
            test.message
          );
      } else {
        
         cy.title().should("include", "Swag Labs");
      }
    });
  });
});