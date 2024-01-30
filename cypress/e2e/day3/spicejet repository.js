export {spicejet}

class spicejet{

    enterurl(url){
        cy.visit(url)
    }

    entertitle(title){
        cy.get('.col-sm-4 > .form-control').select(title)     }

     enterfirstname(fname) {
        cy.get('#first_name').type(fname)   }

     enterlastname(lname){
         cy.get('#last_name').type(lname)       }

     clickcountry(country){
         cy.get(':nth-child(3) > :nth-child(1) > .form-control').select(country)  }

    enterbirthdate(bdate){
         cy.get('#dobDate').type(bdate)   }

     entermobileno(mobno){
         cy.get('.react-tel-input > .form-control').type(mobno)       }

     entermailid(mailid){
         cy.get('#email_id').should("be.visible").click().type(mailid)   }

     enterpassword(password){
        cy.get('#new-password').click().type(password)         }

      entercpassword(cpassword){
         cy.get('#c-password').click().type(cpassword)           }

      entersubmit(submit){
        cy.get('.px-sm-4 > a > .btn').click()  }

}