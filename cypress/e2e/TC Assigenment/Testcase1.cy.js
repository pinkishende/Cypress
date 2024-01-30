describe("Operations", ()=> {
  
//    it("login page ", ()=>{   
//     cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/log")
//     cy.get('#username').click().type("niki")
//     cy.get('#password').click().type("nki@123")
//     cy.get('.btn-primary').click()

it("Register page ", ()=>{   
 cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/register")
 cy.get('#firstName').type("Nikita")
 cy.get('#Text1').type("Yadav")
 cy.get('#username').type("niki")
 cy.get('#password').type("nki@123")
 cy.get('.btn-primary').click()

 })    
 })