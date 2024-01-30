export{loginpage }

class loginpage 
{
    enterusername(username)
    {
        cy.get("input[name=username]").type(username)
    }
    enterpassword(password)
    { 
        cy.get("input[name=password]").type(password)
    }
    clickbutton()
        {
            cy.get("button[type=submit]").click()
        }
}