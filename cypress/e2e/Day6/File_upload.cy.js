import "cypress-file-upload";

describe("File uploaded in cypress",()=>{

    it("file upload", ()=>{

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.wait(3000)
       // const filepath = "D:\Cypresstr\cypress\e2e\Day6\File1.txt"

       const filepath = "File1.txt"
        cy.get('#file-upload').attachFile(filepath)
        cy.get('#file-submit').click()
    })
})

