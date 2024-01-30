import {loginpage} from "D:\\cypress\\cypress\\e2e\\cypress\\e2e\\repository.js"

describe("orangeHRM", ()=> {
  
    it("Login", ()=>{

cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.fixture("orangehrm.json").then( (d)=>{

    const obj= new loginpage()

    obj.enterusername(d.username)
    obj.enterpassword(d.password)
   obj.clickbutton()

//   cy.get("input[name=username]").type(d.username) 
//   cy.get("input[name=password]").type(d.password)
//   cy.get("button[type=submit]").click()
})
})
})