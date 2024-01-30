describe("Parabank Login & Logout",()=>{
    
   
    before(function(){
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.log("This is Parabank Login")
    })
    after(function(){
        cy.log("This is Parabank Logout")
    })
    beforeEach(function(){
        cy.log("This is Login block")
        cy.get("input[name=username]").type("Admin")
        cy.get("input[name=password]").type("admin123")
        cy.get("input[value='Log In']").click()
    })
    afterEach(function(){
        cy.log("This is Logout block")
        cy.get('#leftPanel > ul > :nth-child(8) > a').click()
    })
    it("Bill Pay ",()=>{
        cy.log("This is third test")
        cy.get('#leftPanel > ul > :nth-child(4) > a').click()
        cy.get(':nth-child(1) > [width="20%"] > .input').type("Nikita Yadav")
        cy.get(':nth-child(2) > [width="20%"] > .input').type("Marol")
        cy.get(':nth-child(3) > [width="20%"] > .input').type("Mumbai")
        cy.get(':nth-child(4) > [width="20%"] > .input').type("Maharashtra")
        cy.get(':nth-child(5) > [width="20%"] > .input').type("400059")
        cy.get(':nth-child(6) > [width="20%"] > .input').type("1234567890")
        cy.get(':nth-child(8) > :nth-child(2) > .input').type("253463586586")
        cy.get(':nth-child(9) > [width="20%"] > .input').type("253463586586")
        cy.get(':nth-child(11) > [width="20%"]').type("50000")
        cy.get(':nth-child(13) > :nth-child(2) > .input').select("22002")
        cy.get(':nth-child(14) > :nth-child(2) > .button').click()
    })
  })