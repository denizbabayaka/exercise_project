class Login_Page_PO{

       Login_Page(username,password){

             cy.visit("https://www.saucedemo.com/");
             cy.get("#user-name").type(username);
             cy.get("#password").type(password);
             cy.get("#login-button").click();
       }


}





export default  new Login_Page_PO;