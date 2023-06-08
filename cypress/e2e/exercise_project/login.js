/// <reference types="Cypress"/>



describe("Login Funcionality", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
})

    it("Positive Login test", () => {
      cy.visit("https://www.saucedemo.com/");
      cy.get("#user-name").type("standard_user");
      cy.get("#password").type("secret_sauce");
      cy.get("#login-button").click();
      cy.title().should("include", "Swag Labs");
      cy.url().should("include", "/inventory.html");
    });

    it("Negative Login Test", () => {
      cy.visit("https://www.saucedemo.com/");
      cy.get("#user-name").type("standard_user");
      cy.get("#password").type("secret_sauce1");
      cy.get("#login-button").click();
      cy.xpath("//h3[@data-test='error']").should(
        "have.text",
        "Epic sadface: Username and password do not match any user in this service"
      );
    });
    it.only("Login Test with fixture ", () => {
      cy.visit("https://www.saucedemo.com/");
      cy.get("#user-name").type(data.user_name);
      cy.get("#password").type('1234');
      cy.get("#login-button").click();
      cy.xpath("//h3[@data-test='error']").should(
        "have.text",data.message)
        
    });
  });


