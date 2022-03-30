class loginPage {

    elements = {
        usernameInput: () => cy.xpath("//input[@placeholder='Enter Username']"),
        passwordInput: () => cy.xpath("//input[@placeholder='password']"),
        loginBtn: () => cy.xpath("//button[normalize-space()='LOGIN']"),
        //assert:
        namecheck: () => cy.xpath("//div[normalize-space()='SomeName']"),
        logout: () => cy.xpath("//button[normalize-space()='LOGOUT']"),
    }

    typeUsername(username) {
        this.elements.usernameInput().type(username);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickLogin() {
        this.elements.loginBtn().click();
    }

    checkall() {
        this.elements.namecheck().click();
    }
    checklogout() {
        this.elements.logout().click();
    }



}

module.exports = new loginPage();