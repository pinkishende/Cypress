describe("Data Driven",()=>{

 it("Using Fixtures", ()=>
 {
    cy.fixture('data_orangehrm') .then((data)=>{
        cy.visit(data.url)

        cy.get("input[name=username]").type(data.username)
        cy.get("input[name=password]").type(data.password)
        cy.get("button[type=submit]").click()

    })

  // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   
 })
})
