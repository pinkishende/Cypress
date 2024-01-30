describe("Bookflight",()=>{

    it("Book your charter", ()=>{

        cy.visit("https://www.spicejet.com/#checkin")

        cy.get('[data-testid="travel-type-1"] > .css-76zvg2').click()//.should(be.visible)
        cy.get('[data-testid="search-source-code"]').click()
        cy.get('[data-testid="auto-cmp-txt"]').type("PNQ").click()
        cy.get('[data-testid="auto-cmp-row-title-0"]').click()

        cy.get('[data-testid="search-destination-code"]').click()
        cy.get('[data-testid="auto-cmp-txt"]').type("BLR").click()
        cy.get('[data-testid="auto-cmp-row-title-0"]').click()

        cy.get('[data-testid="home-travellers-adult-1"]').click()
        cy.get('[style="flex-wrap: nowrap;"] > :nth-child(1) > .css-1dbjc4n > .css-76zvg2').select()
        cy.get('[data-testid="search-submit-btn"]').click()
      
    })

})