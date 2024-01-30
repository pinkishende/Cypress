
// describe("Mouse Operations",()=>{

//     it.skip("Mouseover", ()=>
//     {
//         cy.visit("https://demo.opencart.com/")
//     })

// })



describe("Mouse Operations", ()=> {
  
    it.skip("Mouseover", ()=>{

cy.visit("https://demo.opencart.com/")

cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();

cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
.should('be.visible')
.click()
})
})

it.skip("Right Click", ()=>{

    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    
    //cy.get('.toctree-l1.current > :nth-child(1)').click()
//Saritha Parthipan12:32 PM
describe("Mouse Operations", ()=> {
  
    it.skip("Mouseover", ()=>{

cy.visit("https://demo.opencart.com/")

cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();

cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
.should('be.visible')
.click()
})
})


it.skip("Right Click", ()=>{

    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    
    //cy.get('.toctree-l1.current > :nth-child(1)').click()

})
})