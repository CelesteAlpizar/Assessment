const user = Cypress.env('user')

class Login {
    
    invalidCredentials() {
        cy.login(user.username, user.wrongPassword)
        cy.get('[data-test="error"]').should('be.visible')
    }

    validCredentials() {
      cy.login(user.username, user.password)
      cy.url().should("contain", "/inventory.html")
    }

}

  

export const LoginPage = new Login()

