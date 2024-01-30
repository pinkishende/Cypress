describe("Parabank hooks",()=>{

    before(function(){
        cy.log("This is the setup block")
        cy.visit("https://parabank.parasoft.com/parabank/contact.htm;jsessionid=E0D0A98011256FFBAB57A2EDFA158833")
    })

    after(function(){
        cy.log("This is the teardown block")
    })

    beforeEach(function(){
        cy.log("This is the login block")
        cy.fixture('loginpara').then((para)=>{
    
        cy.get(':nth-child(2) > .input').click().type(para.username)
        cy.get(':nth-child(4) > .input').click().type(para.password)
        cy.get(':nth-child(5) > .button').click()
        })
    })

    afterEach(function()
    {
        cy.log("this is the logout block")
            cy.wait(5000)
              cy.get('#leftPanel > ul > :nth-child(8) > a').click()
    })


    it("Test1",()=>{
        cy.log('This is the test')
       })
}) 