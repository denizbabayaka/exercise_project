/// <reference types="Cypress"/>
import Login_Page_PO from "../../support/PageObjects/Login_Page_PO";

describe("Assert Product Detail", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });
  it("Assert sepecific product detail", () => {
    Login_Page_PO.Login_Page(data.user_name, data.password);
    cy.get(".inventory_item_desc").each(($el, index, $list) => {
      const prod = $el.text();

      if (prod === data.product) {
        expect(prod).to.eq(data.product);
      }
    });
  });
});
