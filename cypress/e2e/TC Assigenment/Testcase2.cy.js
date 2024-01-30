describe("Operations", ()=> {
  
    it("login page ", ()=>{   
     cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/logi")
     cy.get('.borderM > :nth-child(1) > .btn').click()
     cy.get('#userSelect').select()
    })
})