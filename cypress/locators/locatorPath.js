const WEB = {
  LOGIN: {
    USERNAME_INPUT: '#user-name',
    PASSWORD_INPUT: '#password',
    LOGIN_BUTTON: '#login-button'
  },
  CART: {
    ADD_TO_CART_BUTTON: "#add-to-cart-sauce-labs-backpack",
    CART_LINK: '//*[@id="shopping_cart_container"]/a',
    REMOVE_BUTTON: '#remove-sauce-labs-backpack'
  },
  CHECKOUT: {
    CHECKOUT_BUTTON: '#checkout',
    FIRST_NAME_INPUT: '#first-name',
    LAST_NAME_INPUT: '#last-name',
    POSTAL_CODE_INPUT: '#postal-code',
    CONTINUE_BUTTON: '#continue',
    FINISH_BUTTON: '#finish'
  },
  MESSAGE: {
    ERROR_MESSAGE: '.error-message-container.error',
    CHECKOUT_COMPLETE_MESSAGE: '//*[@id="checkout_complete_container"]/h2'
  },
  MENU: {
    MENU_BUTTON: '#react-burger-menu-btn',
    LOGOUT_BUTTON: '#logout_sidebar_link',
    CROSS_BUTTON: '#react-burger-cross-btn'
  },
  PRODUCT: {
    PRODUCT_LINK: '//*[@id="item_4_title_link"]/div',
    BACK_TO_PRODUCTS_BUTTON: '#back-to-products'
  }
};

module.exports = { WEB };