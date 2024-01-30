/*
describe("Transfer funds from Parabank",()=>{
    it("Funds",()=>{

        cy.fixture('loanapply').then((para)=>{
            cy.visit(para.url)
            cy.get(':nth-child(2) > .input').click().type(para.username)
            cy.get(':nth-child(4) > .input').click().type(para.password)
            cy.get(':nth-child(5) > .button').click()
            cy.get('#leftPanel > ul > :nth-child(7) > a').click()
            cy.get('#amount').click().type(para.amount)
            cy.get('#downPayment').click().type(para.downpayment)
            cy.get('#fromAccountId').select(para.fromaccId)
            cy.get('[colspan="2"] > .button').click()
        })
        
    })
}) */

describe('Hooks', ()=>{

    before(function(){
        cy.log('This is the setup block')
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
    })

    after(function(){
        cy.log('This is the teardown block')
    })

    beforeEach(function(){
        cy.log('This is the login block')

        cy.fixture('loanapply').then((para)=>{
            cy.visit(para.url)
            cy.get(':nth-child(2) > .input').click().type(para.username)
            cy.get(':nth-child(4) > .input').click().type(para.password)
            cy.get(':nth-child(5) > .button').click()
            cy.get('#leftPanel > ul > :nth-child(7) > a').click()
            cy.get('#amount').click().type(para.amount)
            cy.get('#downPayment').click().type(para.downpayment)
            cy.get('#fromAccountId').select(para.fromaccId)
            cy.get('[colspan="2"] > .button').click()
    })
})

    afterEach(function()
    {
        cy.log("this is the logout block")
        cy.wait(5000)
        cy.get('#leftPanel > ul > :nth-child(8) > a').click()
   
    })

   it("Test1",()=>{
    cy.log('This is applying for laon test')
   })
    
}) 