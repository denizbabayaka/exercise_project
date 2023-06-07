/// <reference types="Cypress"/>
/// <reference types="Cypress"/>

describe('Add Products', () => {
    it('Add product to basket', () => {
         cy.visit("https://www.saucedemo.com/");
         cy.get("#user-name").type("standard_user");
         cy.get("#password").type("secret_sauce");
         cy.get("#login-button").click();
         cy.xpath("(//div[@class='inventory_item_description'])").each(($el,index,$list)=>{
            if($el.text()=='carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
         })
        
    });
});