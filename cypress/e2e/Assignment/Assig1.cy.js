 describe("ParaBank", ()=> {
    
    // using email
     it.skip("Email ", ()=>{ 

        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.get('.contact > a').click()
        cy.get('#name').type("ABC")
        cy.get('#email').type("abc@gmail.com")
        cy.get('#phone').type("1234567890")
        cy.get('#message').type("Welcome in ParaBank")
        cy.get('[colspan="2"] > .button').click()
    })

    //using register
    it.skip("Register ", ()=>{   

        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get('#customer\\.firstName').type("Niki")
        cy.get('#customer\\.lastName').type("Yadav")
        cy.get('#customer\\.address\\.street').type("Marol,Andheri East")
        cy.get('#customer\\.address\\.city').type("Mumbai")
        cy.get('#customer\\.address\\.state').type("Maharashtra")
        cy.get('#customer\\.address\\.zipCode').type("400059")
        cy.get('#customer\\.phoneNumber').type("1234567890")
        cy.get('#customer\\.ssn').type("aa")
        cy.get('#customer\\.username').type("niki@gmail.com")
        cy.get('#customer\\.password').type("Niki@123")
        cy.get('#repeatedPassword').type("Niki@123")
        cy.get('[colspan="2"] > .button').click()
    })

    //using login
    it("Login page ", ()=>{ 

        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.get(':nth-child(2) > .input').type("niki@gmail.com")
        cy.get(':nth-child(4) > .input').type("Niki@123")
        cy.get(':nth-child(5) > .button').click()
    
    })
})
