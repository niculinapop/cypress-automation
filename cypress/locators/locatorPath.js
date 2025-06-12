const WEB = {
  LOGIN: {
    USERNAME_INPUT: '#user-name',
    PASSWORD_INPUT: '#password',
    LOGIN_BUTTON: '#login-button'
  },
  CART: {
    ADD_TO_CART_BUTTON: "#add-to-cart-sauce-labs-backpack",
    CART_LINK: '//*[@id="shopping_cart_container"]/a',
    REMOVE_BUTTON: '#remove-sauce-labs-backpack',
    CONTINUE_SHOPPING_BUTTON: '#continue-shopping'
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
    CROSS_BUTTON: '#react-burger-cross-btn',
    ABOUT_BUTTON: '#about_sidebar_link',
    RESET_APP_STATE_BUTTON: '#reset_sidebar_link'
  },
  PRODUCT: {
    PRODUCT_LINK: '//*[@id="item_4_title_link"]/div',
    BACK_TO_PRODUCTS_BUTTON: '#back-to-products'
  },
  SORT: {
    SORT_DROPDOWN: '.product_sort_container',
    SORT_OPTION_Z_TO_A: '[data-test="product-sort-container"] option[value="za"]',
    SORT_OPTION_LOW_TO_HIGH: '[data-test="product-sort-container"] option[value="lohi"]',
    SORT_OPTION_HIGH_TO_LOW: '[data-test="product-sort-container"] option[value="hilo"]'
  }
};

module.exports = { WEB };