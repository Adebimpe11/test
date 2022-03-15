import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import visitHomePage from './webdriverpage'
//import contactUs from './webdriverpage'

Given('I browse to webdriver uni website', () =>{
    visitHomePage.visitlink()
})

Then('I should see homepage', () =>{
    visitHomePage.confirmpage()
})

Given('I browse to the contact form', () =>{
    visitHomePage.contactURL()
})

And('fill the form', () =>{
    visitHomePage.fillContactUsForm()
})

Then('I should get a success feedback', () => {
    visitHomePage.successResponse()
})

