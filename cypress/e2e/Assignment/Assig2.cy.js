 //using email fixture
 describe("ParaBank", ()=> {

      it.skip("Fixture ", ()=>{   
         cy.fixture('email') .then((d)=>{

            cy.visit(d.url)
            cy.get('.contact > a').click()
            cy.get('#name').type(d.name)
            cy.get('#email').type(d.email)
            cy.get('#phone').type(d.phno)
            cy.get('#message').type(d.message)
            cy.get('[colspan="2"] > .button').click()
      })
})




//using register fixture
it.skip("Fixture ", ()=>{   
      
      cy.fixture('register') .then((d)=>{
      cy.visit(d.url)
      cy.get('#loginPanel > :nth-child(3) > a').click()
      cy.get('#customer\\.firstName').click().type(d.fname)
      cy.get('#customer\\.lastName').type(d.lname)
      cy.get('#customer\\.address\\.street').type(d.address)
      cy.get('#customer\\.address\\.city').type(d.city)
      cy.get('#customer\\.address\\.state').type(d.state)
      cy.get('#customer\\.address\\.zipCode').type(d.zipcode)
      cy.get('#customer\\.phoneNumber').type(d.phone)
      cy.get('#customer\\.ssn').type(d.ssn)
      cy.get('#customer\\.username').type(d.username)
      cy.get('#customer\\.password').type(d.password)
      cy.get('#repeatedPassword').type(d.cpassword)
      cy.get('[colspan="2"] > .button').click()
      cy.wait(1000)
      })
})


//using login fixture
it("Fixture ", ()=>{   
      cy.fixture('login') .then((d)=>{

      // cy.visit("https://parabank.parasoft.com/parabank/index.htm")
      cy.visit(d.url)
      cy.get(':nth-child(2) > .input').type(d.username)
      cy.get(':nth-child(4) > .input').type(d.password)
      cy.get(':nth-child(5) > .button').click()
      })
})


it.skip("Open new account", ()=>{ 

      cy.visit("https://parabank.parasoft.com/parabank/index.htm")
      
  })

})

