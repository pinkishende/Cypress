export{Customer}

class Customer{

    enterfirstname(fname){
        cy.get('#customer\\.firstName').click().type(fname)
    }

    enterlastname(lname){
        cy.get('#customer\\.lastName').type(lname)
    }

    enteraddress(address){
        cy.get('#customer\\.address\\.street').type(address)
    }

    entercityname(city){
        cy.get('#customer\\.address\\.city').type(city)
    }

    enterstatename(state){
        cy.get('#customer\\.address\\.state').type(state)
    }

    enterzipcode(zipcode){
        cy.get('#customer\\.address\\.zipCode').type(zipcode)
    }

    enterphonenum(phone){
        cy.get('#customer\\.phoneNumber').type(phone)
    }

    enterssncode(ssn){
        cy.get('#customer\\.ssn').type(ssn)
    }

    enterusername(username){
        cy.get('#customer\\.username').type(username)
    }

    enterpassword(password){
        cy.get('#customer\\.password').type(password)
    }

    entercpassword(cpassword){
        cy.get('#repeatedPassword').type(cpassword)
    }

    clickbutton(){
        cy.get('[colspan="2"] > .button').click()
    }
}

     
   
     
     
     