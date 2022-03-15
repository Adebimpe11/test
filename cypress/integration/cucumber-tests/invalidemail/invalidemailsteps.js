import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import invalidEmailTest from './invalidemailpage'

Given('I browse to the contact form', () =>{
    invalidEmailTest.contactURL()
})

And('fill the form with invalid email', () =>{
    invalidEmailTest.invalidEmail()
})

Then('I should get a failure response', () => {
    invalidEmailTest.failureResponse()
})
