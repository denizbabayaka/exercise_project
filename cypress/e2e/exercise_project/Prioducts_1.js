/// <reference types="Cypress"/>
describe("Add Multiple Items to Cart", () => {
  it.only("should add multiple items to the cart", () => {
    var countProduct = [];
    let numb = 0;

    cy.visit("https://www.saucedemo.com/");

    // Login
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    // Select multiple items
    cy.get(".inventory_item .btn_inventory").each(($button) => {
      // Click on the current button
      cy.wrap($button).click();
    });

    cy.get(".shopping_cart_badge")
      .invoke("text")
      .then((text) => {
        const count = parseInt(text);
        expect(count).to.be.greaterThan(0);
      });
    cy.get(".shopping_cart_badge").click();
    // Get the number of items displayed on the cart page
    cy.get(".cart_item").its("length").should("be.gt", 0).as("itemCount");
    // Log the number of items
    cy.get("@itemCount").then((count) => {
      cy.log(`Number of items in the cart: ${count}`);
    });

    cy.wait(2000);
    // Log total dolar amount
    cy.get(".inventory_item_price")
      .each(($el, index, $list) => {
        const stringValue0 = $el.text().trim();
        const stringValue = stringValue0.replace(/\D/g, "");

        countProduct[index] = parseFloat(stringValue, 10);
      })
      .then(() => {
        var i;

        for (i = 0; i < countProduct.length; i++) {
          if (countProduct[i]) {
            numb += countProduct[i];
          }
        }
        cy.log("Found total number:" + numb);
        expect(numb).to.eq(12994);
      });
  });
});

describe("Add to Cart Functionality", () => {
  it("should assert that the cart is initially empty", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    cy.get(".shopping_cart_link")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.equal(""); // Check if the text is an empty string
      });
  });
});
