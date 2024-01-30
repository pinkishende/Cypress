export{Cust}

class Cust{

    entername(name){
        cy.get('#name').click().type(name)
    }

    enteremail(email){
        cy.get('#email').click().type(email)
    }

    enterphoneno(phno){
        cy.get('#phone').type(phno)
    }

    entermessage(message){
        cy.get('#message').type(message)
    }

    clickbutton(){
        cy.get('[colspan="2"] > .button').click()
    }
}