const URL = 'https://webdriveruniversity.com/'
const FIRSTNAME = '[name="first_name"]'
const LASTNAME = '[name="last_name"]'
const EMAIL = '[name="email"]'
const COMMENTS = '[name="message"]'
const SUBMIT = '[value="SUBMIT"]'
const SUCCESS_RESPONSE = '#contact_reply'
const CONTACT_URL = 'https://webdriveruniversity.com/Contact-Us/contactus.html'

class visitHomePage{
    static visitlink(){
        cy.visit(URL)
    }
    static confirmpage(){
        cy.url().should('include','webdriveruniversity.com')
    }

    static contactURL(){
        cy.visit(CONTACT_URL)
    }

    static fillContactUsForm(){
        cy.get(FIRSTNAME).type('John')
        cy.get(LASTNAME).type('Doe')
        cy.get(EMAIL).type('John@yahoo.com')
        cy.get(COMMENTS).type('You are doing a great job')
        cy.wait(2000)
        cy.get(SUBMIT).click()

    }

    static successResponse(){
        cy.get(SUCCESS_RESPONSE).should('be.visible')
    }

    static invalidEmail(){
        cy.get(FIRSTNAME).type('John')
        cy.get(LASTNAME).type('Doe')
        cy.get(EMAIL).type('testmail')
        cy.get(COMMENTS).type('You are doing a great job')
        cy.wait(2000)
        cy.get(SUBMIT).click()

    }
}
   
export default visitHomePage
