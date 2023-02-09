import {LoginPage} from "../pages/loginPage"

describe('Login scenarios', () => {

    const user = Cypress.env('user')


    it('Login with invalid credentials', () => {

      LoginPage.invalidCredentials();
        // cy.login(user.username, user.wrongPassword)
        // cy.get('[data-test="error"]').should('be.visible')
        
      })
    
    it('Login with valid credentials', () => {
      LoginPage.validCredentials();
      // cy.login(user.username, user.password)
      // cy.url().should("contain", "/inventory.html")
    })
    
  })