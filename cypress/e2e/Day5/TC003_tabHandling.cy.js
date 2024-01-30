describe("Tab Handling", ()=> {
    
it.skip("TC001", ()=>{ 

       cy.visit("https://demoqa.com/browser-windows")
       cy.get('#tabButton').click()
    })


it.skip("Handle new tab", function(){
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.wait(3000)
        cy.get('.example > a').invoke('removeAttr', 'target').click()
        cy.url()
            .should('include', '/windows/new')
        cy.get('h3')
            .should('have.text', 'New Window') 
    })
    

it.only("href attribute", ()=>{

    cy.visit("https://www.asianpaints.com/online-shop/colour-selection-tools.html")
    cy.wait(3000)
    cy.get('[href="https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html"] > p').then(newtab=>{
    const hreftab=newtab.prop('href')
    cy.log(hreftab)
    let length1=hreftab.length()
    let newtb=hreftab.substring(6,length1-6)
    cy.visit(newtb)
    cy.log(newtb)
    cy.url().should("eq","https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html")
     })
})
})
