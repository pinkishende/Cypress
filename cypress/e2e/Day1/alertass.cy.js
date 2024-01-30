describe("Alert",()=>{

    it("Sample Alert", ()=> {
       cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
       cy.get('#alertexamples').click()
       cy.on('window:alert',(t)=>
        {
           expect(t).contains("I am an alert box!")
       })
})

     it("Confirm Alert", ()=>{
     cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")

     cy.get('#confirmexample').click()
     cy.on('window:confirm',(t)=>
     {
         expect(t).contains("I am a confirm alert")
        })
    })

    it("Prompt Alert", ()=>{
    cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
    
      cy.window().then((win)=>{
      cy.stub(win,'prompt').returns('Nikita')
      
      })
      cy.get('#promptexample').click()
  })

})