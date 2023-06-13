/// <reference types="Cypress"/>

//const { default: Login_Page_PO } = require("../../support/PageObjects/Login_Page_PO");
import Login_Page_PO from "../../support/PageObjects/Login_Page_PO";

describe("Add Products", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });
  it("Add product to basket", () => {
    Login_Page_PO.Login_Page(data.user_name,data.password);
    // cy.visit("https://www.saucedemo.com/");
    // cy.get("#user-name").type("standard_user");
    // cy.get("#password").type("secret_sauce");
    // cy.get("#login-button").click();
    cy.get(".inventory_item_description").each(($el, index, $list) => {
      if ($el.text().includes(data.product)) {
        cy.xpath("//button[@id='add-to-cart-sauce-labs-backpack']").click();
      }
    });
  });

  it("should add multiple items to the cart", () => {
    cy.visit("https://www.saucedemo.com/");

    // Login
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    // Select multiple items
    cy.get(".inventory_item .btn_inventory").each(($button) => {
      // Click on  all the purchase  button
      cy.wrap($button).click();
    });
  });

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
