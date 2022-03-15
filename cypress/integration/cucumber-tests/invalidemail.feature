Feature: Submit contact form with invalid email

    As a user
    I want to attempt submitting feeback with invalid email

    Scenario: Invalid email
    Given I browse to the contact form
    And fill the form with invalid email
    Then I should get a failure response