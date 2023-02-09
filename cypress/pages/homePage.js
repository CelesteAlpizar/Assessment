class Home {
    addItems() {
      // Add item to cart
      cy.get('.shopping_cart_link').should('have.text', '')

      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').eq(0).click()

      // Validate the items in the cart
      cy.get('.shopping_cart_link').should('have.text', '1')
    }
}

export const HomePage = new Home()