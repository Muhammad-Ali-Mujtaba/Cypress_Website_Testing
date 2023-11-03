export class LoginPage {
    
    //Implementing Page Object Model

    username_textbox = '[data-testid="txt-email"]'
    password_textbox = '[data-testid="txt-password"]'
    login_button = '[data-testid="btn-login"]'

    enterUsername(username) {
        cy.get(this.username_textbox).type(username)
    }

    enterPassword(password) {
        cy.get(this.password_textbox).type(password)
    }

    clickLogin() {
        cy.get(this.login_button).click()
    }


}