const WEB = {
  LOGIN: {
    USERNAME_INPUT: '#user-name',
    PASSWORD_INPUT: '#password',
    LOGIN_BUTTON: '#login-button'
  },
  CART: {
    ADD_TO_CART_BUTTON: "#add-to-cart-sauce-labs-backpack",
    CART_LINK: '//*[@id="shopping_cart_container"]/a'
  },
  MESSAGE: {
    ERROR_MESSAGE: '.error-message-container.error'
  },
  MENU: {
    MENU_BUTTON: '#react-burger-menu-btn',
    LOGOUT_BUTTON: '#logout_sidebar_link'
  },
  PRODUCT: {
    PRODUCT_LINK: '//*[@id="item_4_title_link"]/div',
    BACK_TO_PRODUCTS_BUTTON: '#back-to-products'
  }
};

module.exports = { WEB };