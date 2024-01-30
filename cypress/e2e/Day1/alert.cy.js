describe("Alert",()=>{

    it.only("Sample Alert", ()=>
   {
       cy.visit("https://letcode.in/alert")
       cy.get('#accept').click()
       cy.on('window:alert',(t)=>
        {
           expect(t).contains("Hey! Welcome to Letcode")
       })

   })

     it.only("Confirm Alert", ()=>
     {
     cy.visit("https://letcode.in/alert")
       cy.get('#confirm').click()

     cy.on('window:confirm',(t)=>
     {
         expect(t).contains("Are you happy with LetCode")
        })

    })


    it.only("Prompt Alert", ()=>{

      cy.visit("https://letcode.in/alert")
      
      cy.window().then((win)=>{
      cy.stub(win,'prompt').returns('Nikita')
      
      })
      cy.get('#prompt').click()
  })

})