
class Cart {
    goToCart() {
      //Go to cart page
      cy.get('.shopping_cart_link').click()
      cy.url().should('eq',  Cypress.config().baseUrl + '/cart.html')
    }
}

export const CartPage = new Cart()