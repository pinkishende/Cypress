import 'cypress-iframe'

describe("Iframe", ()=> {
    
     it("TC001 ", ()=>{ 

        cy.visit("https://jqueryui.com/droppable/")

        cy.frameLoaded('.demo-frame')
        cy.iframe().find("#draggable").then(function(t){

         const frmtxt = t.text()
         expect(frmtxt).to.contains('Drag me to my target');
         cy.log(frmtxt);
      })
     })
    })