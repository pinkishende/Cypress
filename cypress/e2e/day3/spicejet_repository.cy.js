import {spicejet} from "D:\\cypress\\cypress\\e2e\\cypress\\e2e\\spicejet repository.js"

describe("Spicejet",()=>{

    it("Fixture", ()=>{
        cy.fixture('spicejet') .then((d)=>{
            const obj= new spicejet()

            obj.enterurl(d.url)
            obj.entertitle(d.title)
            obj.enterfirstname(d.fname)
            obj.enterlastname(d.lname)
            obj.clickcountry(d.country)
            obj.enterbirthdate(d.bdate)
            obj.entermobileno(d.mobno)
            obj.entermailid(d.mailid)
            obj.enterpassword(d.password)
            obj.entercpassword(d.cpassword)
            obj.entersubmit()
        
    })

})

})