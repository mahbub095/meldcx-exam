import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
const loginPage = require('../../pages/loginPage')

Given('A user opens a partnerforsqa website', () => {
    cy.visit('http://localhost:8081/')
})
When('A user enters the username {string}', (username) => {
    loginPage.typeUsername(username)
})
When('A user provides incorrect credentials', (table) => {
    table.hashes().forEach(row => {
        cy.log(row.username)
        cy.log(row.password)
        loginPage.typeUsername(row.username)
        loginPage.typePassword(row.password)
    });
})
And('A user enters the password {string}', (password) => {
    loginPage.typePassword(password)
})
And('A user clicks on the login button', () => {
    loginPage.clickLogin()

})
And('Check & verify name', () => {
    cy.xpath("//div[normalize-space()='SomeName']").should('contain', 'SomeName');
    cy.xpath("//div[normalize-space()='some fruit']").should('contain', 'some fruit');
    cy.xpath("//div[normalize-space()='The Room']").should('contain', 'The Room');
    cy.xpath("//div[normalize-space()='BN<1234>']").should('contain', 'BN<1234>');

})
And('Check & verify 2nd name', () => {
    cy.xpath("//div[normalize-space()='Mango']").should('contain', 'Mango');
    cy.xpath("//div[normalize-space()='V for Vendetta']").should('contain', 'V for Vendetta');
    cy.xpath("//div[normalize-space()='The last prime number']").should('contain', 'The last prime number');

})
And('Click logout', () => {
    loginPage.checklogout()
})