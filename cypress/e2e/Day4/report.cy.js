describe("Spicejet",()=>{

    it("Fixture", ()=>{
        cy.fixture('spicejet').then((data)=> {
            cy.visit(data.url)
        //cy.visit("https://spiceclub.spicejet.com/signup")

        cy.url().should("eq", "https://spiceclub.spicejet.com/signup")

        cy.get('.col-sm-4 > .form-control').should("be.visible").select(data.title)    
        cy.get('#first_name').should("be.visible").type(data.fname)
        cy.get('#last_name').should("be.visible").type(data.lname)

        cy.get(':nth-child(3) > :nth-child(1) > .form-control').select(data.country)
        cy.get('#dobDate').should("be.visible").click().type(data.bdate)
        
        
        cy.get('.react-tel-input > .form-control').type(data.mobno)
        cy.get('#email_id').should("be.visible").click().type(data.mailid)
        cy.get('#new-password').should("be.visible").click().type(data.password)
        cy.wait(3000)
        cy.get('#c-password').should("be.visible").click().type("asedrdr")
        cy.get('#defaultCheck1').should("be.visible").check()
       cy.get('.px-sm-4 > a > .btn').click()
    })

})

})
