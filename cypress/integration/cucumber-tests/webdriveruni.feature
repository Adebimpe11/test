Feature: Browse to Web driver uni website

    As a user
    I want to browse to webdriver uni website

    Scenario: Acess page
    Given I browse to webdriver uni website
    Then I should see homepage

# Feature: Use the Contact Us Feature 

#     As a valid user
#     I want to contact the admin

    Scenario: Contact Us
    Given I browse to the contact form
    And fill the form
    Then I should get a success feedback