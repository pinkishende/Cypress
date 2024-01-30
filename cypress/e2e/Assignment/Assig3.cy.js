 
 import {Cust} from "D:\\Cypresstr\\cypress\\e2e\\Assignment\\Assig2 repository.js"
 describe("ParaBank",()=>{

     it("Fixture", ()=>{
         cy.fixture('email') .then((data)=>{
             //cy.visit("https://parabank.parasoft.com/parabank/index.htm")
             cy.visit(data.url)
             const obj= new Cust()
             cy.get('.contact > a').click()
             obj.entername(data.name)
             obj.enteremail(data.email)
             obj.enterphoneno(data.phno)
             obj.entermessage(data.message)
            obj.clickbutton()
     })
 })
})



/*
 import {Customer} from "D:\\Cypresstr\\cypress\\e2e\\Assignment\\Assig2regi repository.js"

 describe("ParaBank",()=>{

 it("Fixture", ()=>{
     cy.fixture('register') .then((data)=>{
         //cy.visit("https://parabank.parasoft.com/parabank/index.htm")
         cy.visit(data.url)
         const obj= new Customer()

         cy.get('#loginPanel > :nth-child(3) > a').click()
         obj.enterfirstname(data.fname)
         obj.enterlastname(data.lname)
         obj.enteraddress(data.address)
         obj.entercityname(data.city)
         obj.enterstatename(data.state)
         obj.enterzipcode(data.zipcode)
         obj.enterphonenum(data.phone)
         obj.enterssncode(data.ssn)
         obj.enterusername(data.username)
         obj.enterpassword(data.password)
         obj.entercpassword(data.cpassword)
         obj.clickbutton() 
 })
 })
 })
 */

/*
 import {Cust} from "D:\\Cypresstr\\cypress\\e2e\\Assignment\\Assig3login repository.js"

 describe("ParaBank",()=>{

     it("Fixture", ()=>{
         cy.fixture('login') .then((data)=>{
             //cy.visit("https://parabank.parasoft.com/parabank/index.htm")
             cy.visit(data.url)
             const obj= new Cust()
            obj.enterusername(data.username)
            obj.enterpassword(data.password)
           obj.clickbutton()      
   })
 })
 })*/
