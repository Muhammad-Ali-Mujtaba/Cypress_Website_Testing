import { LoginPage } from "./pages/LoginPage";

//Test with Page Object Model for another website
const loginPage = new LoginPage()

describe('Login Tests', () => {

    beforeEach(() => {
        cy.visit('https://www.bookiply.com/app/login')
    })

    it('Login Correct', () => {
        loginPage.enterUsername('Some username 123')
        loginPage.enterPassword('123Qwerty')
        loginPage.clickLogin()
        cy.contains(/please enter a valid email address/i).should('be.visible')

    })


})