import axios from "axios";
import { API_URL } from "../../constants";

const state = {
  cartItems: []
};

const getters = {
  cartItems(state) {
    return state.cartItems;
  },
  cartTotal(state) {
    //get total cart price
    return state.cartItems
      .reduce((acc, cartItem) => {
        return cartItem.qty * cartItem.price + acc;
      }, 0)
      .toFixed(2);
  }
};

const mutations = {
  UPDATE_CART_ITEMS(state, payload) {
    state.cartItems = payload;
  },
  ADD_CART_ITEM(state, payload) {
    state.cartItems.push(payload);
  },
  DELETE_ITEM(state, payload) {
    const index = state.cartItems.findIndex(item => item.id === payload.id);
    state.cartItems.splice(index, 1);
  }
};

const actions = {
  async fetchCartItems(context) {
    const { data } = await axios.get(`${API_URL}/cart`);
    //commit mutations
    context.commit("UPDATE_CART_ITEMS", data);
  },
  //add to cart
  async addToCart(context, payload) {
    payload.id = Date.now().toString();
    const { data } = await axios.post(`${API_URL}/cart`, payload);
    //commit mutations
    context.commit("ADD_CART_ITEM", data);
  },
  async removeItemFromCart(context, payload) {
    const { data } = await axios.delete(`${API_URL}/cart/${payload.id}`);
    //commit mutations
    context.commit("DELETE_ITEM", payload);
  }
};

const carttModule = {
  state,
  mutations,
  actions,
  getters
};

export default carttModule;
