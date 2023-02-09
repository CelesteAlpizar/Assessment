const user = Cypress.env('user')

class Checkout {
    checkoutStep1() {
     //Go to checkout
     cy.get('[data-test="checkout"]').click()

     cy.url().should('eq',  Cypress.config().baseUrl + '/checkout-step-one.html')

     // Filling checkout data
     cy.get('[data-test="firstName"]').type(user.firstName)
     cy.get('[data-test="lastName"]').type(user.lastName)
     cy.get('[data-test="postalCode"]').type(user.postalCode)
    }

    checkoutStep2() {
    //Second step of checkout
    cy.get('[data-test="continue"]').click()

    cy.url().should('eq',  Cypress.config().baseUrl + '/checkout-step-two.html')
    }

    checkoutStepFinal() {
        //Place the order
      cy.get('[data-test="finish"]').click()

      cy.url().should('eq',  Cypress.config().baseUrl + '/checkout-complete.html')
        }

}

export const CheckoutPage = new Checkout()