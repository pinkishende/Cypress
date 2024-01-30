describe("Mouse Operations",()=>{

    it.skip("Right Click", ()=>
    {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/")
        cy.get('.wy-menu > :nth-child(1) > :nth-child(3) > :nth-child(1)')
        cy.get('.context-menu-one').rightclick()
    })

    
    it.only("Double Click", ()=>
    {
        cy.visit("https://www.plus2net.com/javascript_tutorial/ondblclick-demo2.php")
        cy.get('input').dblclick()
    })

    

})