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
  it("Open new account",()=>{
      cy.log("This is first test")
      cy.get('#leftPanel > ul > :nth-child(1) > a').click()
      cy.get('#type').select("SAVINGS")
      cy.get('#fromAccountId').select("24222")  
  })
})