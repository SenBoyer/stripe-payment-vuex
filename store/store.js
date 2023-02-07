import { createStore } from "vuex";

export default createStore({
  state: {
    productsArray: [],
    checkoutCart: [],
    selectedProduct: {},
  },
  mutations: {
    ADD_ITEM_TO_CART(state, payload) {
      let payload_number = Number(payload.quantity);
      for (let i = 0; i < state.checkoutCart.length; i++) {
        if (state.checkoutCart[i].item._id === payload.item._id) {
          state.checkoutCart[i].item.quantity += payload_number;
          return;
        }
      }
      payload.item.quantity = payload_number;
      state.checkoutCart.push(payload);
      window.localStorage.setItem("cart", JSON.stringify(state.checkoutCart));
    },
    REMOVE_PRODUCT(state, payload) {
      state.checkoutCart = state.checkoutCart.filter(
        (prod) => prod.item._id != payload
      );
      localStorage.setItem("cart", state.checkoutCart);
    },
    CHANGE_QUANTITY(state, payload) {
      let payload_number = Number(payload.quantity);
      for (let i = 0; i < state.checkoutCart.length; i++) {
        if (state.checkoutCart[i].item.name === payload.item) {
          state.checkoutCart[i].item.quantity = payload_number;
          return;
        }
      }
      window.localStorage.setItem("cart", JSON.stringify(state.checkoutCart));
    },

    INIT_PRODUCTS(state, payload) {
      state.productsArray = payload;
    },
    GET_PRODUCT_BY_ID(state, id) {
      let product = state.productsArray.find((item) => item._id === id);
      state.selectedProduct = product;
    },
    GET_CHECKOUT_ON_INIT(state, payload) {
      state.checkoutCart = payload;
    },
  },
  actions: {
    cartAdd({ commit }, payload) {
      commit("ADD_ITEM_TO_CART", payload);
    },
    initCheckout({ commit }) {
      let cart = JSON.parse(window.localStorage.getItem("cart"));
      if (cart) {
        commit("GET_CHECKOUT_ON_INIT", cart);
      }
    },
    changeCartQuantity({ commit }, payload) {
      commit("CHANGE_QUANTITY", payload);
    },
    getAllProducts({ commit }) {
      fetch("https://stripe-vue-backend.herokuapp.com/")
        .then((res) => res.json())
        .then((data) => {
          commit("INIT_PRODUCTS", data);
        });
    },

    idLookup({ commit }, id) {
      commit("GET_PRODUCT_BY_ID", id);
    },
    removeProduct({ commit }, id) {
      commit("REMOVE_PRODUCT", id);
    },
  },
  getters: {
    getCheckout: (state) => state.checkoutCart,
    getProducts: (state) => state.productsArray,
    getSelectedProduct: (state) => state.selectedProduct,
  },
});
