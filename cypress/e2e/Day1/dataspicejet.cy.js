describe("Spicejet",()=>{

    it("Fixture", ()=>{
        cy.fixture('data_spicejet') .then((data)=>{
            cy.visit(data.url)
        cy.visit("https://spiceclub.spicejet.com/signup")
        
       // cy.url().should("eq", "https://spiceclub.spicejet.com/signup")

        cy.get('.col-sm-4 > .form-control').should("be.visible").select(data.drop)    
        cy.get('#first_name').should("be.visible").type(data.firstname)
        cy.get('#last_name').should("be.visible").type(data.lastname)

        cy.get(':nth-child(3) > :nth-child(1) > .form-control').select("India")
        cy.get('#dobDate').should("be.visible").click().type(data.date)
        //cy.get('.react-datepicker__month-select').select("December")
        //cy.get('.react-datepicker__year-select').select("2000")
        //cy.get('.react-datepicker__day--011').click()

        cy.get('.react-tel-input > .form-control').type(data.mobileno)
        cy.get('#email_id').should("be.visible").click().type(data.emailid)
        cy.get('#new-password').should("be.visible").click().type(data.password)
        cy.get('#c-password').should("be.visible").click().type(data.cpassword)
        cy.get('#defaultCheck1').should("be.visible").check()
       cy.get('.px-sm-4 > a > .btn').click()
    })

})

})