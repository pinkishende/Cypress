describe("Assianpaint",()=>{

    
    it("Login", ()=>{
        cy.visit("https://www.asianpaints.com/online-shop.html")

        cy.get(':nth-child(6) > .track_section > .iconTextLinks__text').trigger("mouseover").click()

        //wallpaper
        //cy.get(':nth-child(3) > .anchor-explore-stores > .imageWrapper > .image-explore-stores > img').click()
        //cy.get(':nth-child(1) > .d-inline-block > .image-wrap > .prodBannerImage > img.lazy').click()
      
        //Wall stickers

        cy.get(':nth-child(1) > .anchor-explore-stores > .imageWrapper > .image-explore-stores > img').click()
        cy.get('[data-attr-prodsku="W107WZ65L45"] > :nth-child(5) > .global-button-white > :nth-child(1)').click() // add to cart
        cy.get('#cartPinCode').type("400702")
        cy.get('.pin-code-form > .ctaComp > .ctaText').click()

      
      
        it.only("remove attribute", ()=>{

            cy.visit("https://www.asianpaints.com/online-shop/colour-selection-tools.html")
            cy.wait(10000)
            cy.get('[href="https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html"] > .loadLazyImage').invoke('removeAttr','target').click()
            cy.url().should("eq","https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html")
            
            })

            it.only("href attribute", ()=>{

                cy.visit("https://www.asianpaints.com/online-shop/colour-selection-tools.html")
                cy.wait(3000)
                cy.get('[href="https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html"] > p').then(newtab=>{
                    const hreftab=newtab.prop('href')
                    cy.visit(hreftab)
                    cy.url().should("eq","https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html")
                })
            })
 })
 })