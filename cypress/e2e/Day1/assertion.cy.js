// describe("Assertion",()=>{

//  it.skip("Implicit Assertion", ()=>{
//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  
// cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//      .and("include", "orange")   //code for and
//      .and("contain", "orange")    

// //cy.url().should("include", "orange") //code for should 
// //cy.url().should("contain", "orange")    
// //  cy.title().should("eq",'OrangeHRM')

    
// cy.title().and("eq",'OrangeHRM')

//      cy.get("input[name=username]").type("Admin") 
//      cy.get("input[name=password]").type("admin123")
//       cy.get("button[type=submit]").click()
    
//      })

describe("Assertion",()=>{


    it.only("Explicit Assertion", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

     cy.get("input[name=username]").type("Admin") 
      cy.get("input[name=password]").type("admin123")
      cy.get("button[type=submit]").click()
    
      let expname="Admin"
      cy.get('.oxd-userdropdown-name').then((x)=>{
        let acname = x.text()

        expect(acname).to.equal('Burak İkinci')
        expect(acname).to.not.equal(expname)

        assert.equal(acname, expname)
        assert.notEqual(acname,expname)
      
    })
      
  })
})
