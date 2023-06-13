/// <reference types="Cypress" />

describe("My Test Suite", () => {
  beforeEach(() => {
    cy.fixture("example_arr.json").then((data) => {
      globalThis.data = data;
      cy.visit("/");
    });
})

    it("should perform tests for each data object", () => {
      data.forEach((test) => {
        if (test.test_name ==="negative_test") {

          // Test logic for positive case
          cy.get('[data-test="username"]').type(test.user_name);
          cy.get('[data-test="password"]').type(test.password);
          cy.get('[data-test="login-button"]').click();
          
          cy.title().should("include", "Swag Labs");
          cy.go("back");
          
          
        
        } else {
          // Test logic for negative case
          
          cy.get('[data-test="username"]').type(test.user_name);
          cy.get('[data-test="password"]').type(test.password);
          cy.get('[data-test="login-button"]').click();
            cy.xpath("//h3[@data-test='error']").should(
              "have.text",
              test.message
            );
          
        }
        
      });
    });
  });

