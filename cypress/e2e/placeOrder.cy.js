import { CartPage } from "../pages/cartPage";
import { CheckoutPage } from "../pages/checkoutPage";
import { HomePage } from "../pages/homePage";
import {LoginPage} from "../pages/loginPage"

describe('Checkout', () => {

  // const user = Cypress.env('user')

    beforeEach(() => {
        LoginPage.validCredentials();
    })

    it('Verify that the user can place an order', () => {

      HomePage.addItems();
      
      CartPage.goToCart();
      
      CheckoutPage.checkoutStep1();
      
      CheckoutPage.checkoutStep2();
      
      CheckoutPage.checkoutStepFinal()
      
    })
  })
