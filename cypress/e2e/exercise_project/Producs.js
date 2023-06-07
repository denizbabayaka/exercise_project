/// <reference types="Cypress"/>

describe("Add Products", () => {

      before(function () {
        cy.fixture("example").then(function (data) {
          globalThis.data = data;
        });
      });
  it("Add product to basket", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get(".inventory_item_description").each(($el, index, $list) => {
      if ($el.text().includes(data.product)){
        cy.xpath("//button[@id='add-to-cart-sauce-labs-backpack']").click();
        //button[@class='btn btn_primary btn_small btn_inventory']
      }
    });
  });
});
