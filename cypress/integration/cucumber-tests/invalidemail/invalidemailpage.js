const FIRSTNAME = '[name="first_name"]'
const LASTNAME = '[name="last_name"]'
const EMAIL = '[name="email"]'
const COMMENTS = '[name="message"]'
const SUBMIT = '[value="SUBMIT"]'
const CONTACT_URL = 'https://webdriveruniversity.com/Contact-Us/contactus.html'

class invalidEmailTest{

    static contactURL(){
        cy.visit(CONTACT_URL)
    }

    static invalidEmail(){
        cy.get(FIRSTNAME).type('John')
        cy.get(LASTNAME).type('Doe')
        cy.get(EMAIL).type('testmail')
        cy.get(COMMENTS).type('You are doing a great job')
        cy.wait(2000)
        cy.get(SUBMIT).click()

    }

    static failureResponse(){
        cy.get('body').should('contain', 'Error: Invalid email address')
    }
}
   
export default invalidEmailTest
