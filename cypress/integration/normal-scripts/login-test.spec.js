describe('Login Test', function () {
    it('Success Login', () => {
        cy.visit('/')
        cy.get('#email').type('standard_user')
        cy.get('#password').type('secret_sauce')
      
    })
})