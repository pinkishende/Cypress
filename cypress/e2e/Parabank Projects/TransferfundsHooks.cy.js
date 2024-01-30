/*
describe("Transfer funds from Parabank",()=>{
    it("Funds",()=>{

        cy.fixture('loginpara').then((para)=>{
            cy.visit(para.url)
            cy.get(':nth-child(2) > .input').click().type(para.username)
            cy.get(':nth-child(4) > .input').click().type(para.password)
            cy.get(':nth-child(5) > .button').click()
           // cy.get('#leftPanel > ul > :nth-child(2) > a').click()
            cy.get('#leftPanel > ul > :nth-child(3) > a').click()
            cy.get('#amount').click().type("1200")
            cy.get('#fromAccountId').select(para.fromAccountId)
            cy.get('#toAccountId').select(para.toAccountId)
            cy.get(':nth-child(4) > .button').click()
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

        cy.fixture('loginpara').then((para)=>{
            cy.visit(para.url)
            cy.get(':nth-child(2) > .input').click().type(para.username)
            cy.get(':nth-child(4) > .input').click().type(para.password)
            cy.get(':nth-child(5) > .button').click()
           // cy.get('#leftPanel > ul > :nth-child(2) > a').click()
            cy.get('#leftPanel > ul > :nth-child(3) > a').click()
            cy.get('#amount').click().type("1200")
            cy.get('#fromAccountId').select(para.fromAccountId)
            cy.get('#toAccountId').select(para.toAccountId)
            cy.get(':nth-child(4) > .button').click()
        })
})

    afterEach(function()
    {
        cy.log("this is the logout block")
        cy.wait(5000)
        cy.get('#leftPanel > ul > :nth-child(8) > a').click()
   
    })

   it("Test2",()=>{
    cy.log('This is transfering funds test')
   })
    
}) 