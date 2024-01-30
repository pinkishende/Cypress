/*describe("Open new Account",()=>{
    it("New Account ",()=>{
        cy.fixture('openaccount').then((para)=>{
            cy.visit(para.url)
            cy.get(':nth-child(2) > .input').click().type(para.username)
            cy.get(':nth-child(4) > .input').click().type(para.password)
            cy.get(':nth-child(5) > .button').click()
            cy.get('#leftPanel > ul > :nth-child(1) > a').click()
            cy.get('#type').select(para.type)
            cy.get('#fromAccountId').select(para.fromAccountId)
            cy.get('form.ng-valid > div > .button').click()
            cy.wait(5000)
            cy.get('#leftPanel > ul > :nth-child(8) > a').click()
        
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

        cy.fixture('openaccount').then((para)=>{
            cy.visit(para.url)
            cy.get(':nth-child(2) > .input').click().type(para.username)
            cy.get(':nth-child(4) > .input').click().type(para.password)
            cy.get(':nth-child(5) > .button').click()
            cy.get('#leftPanel > ul > :nth-child(1) > a').click()
            cy.get('#type').select(para.type)
            cy.get('#fromAccountId').select(para.fromAccountId)
            cy.get('form.ng-valid > div > .button').click()
        })
})

    afterEach(function()
    {
        cy.log("this is the logout block")
        cy.wait(5000)
        cy.get('#leftPanel > ul > :nth-child(8) > a').click()
    })

   it("Test1",()=>{
    cy.log('This is opening new account test')
   })
    
}) 