<template>
  <div class="cartscreen">
    <div class="cartscreen_left">
      <h2>Shopping Cart</h2>
      <div v-for="item in cartItems" :key="item._id">
        <CartItem :item="item" />
      </div>
    </div>
    <div class="cartscreen_right">
      <div class="cartscreen_info">
        <p>Subtotal {{ numCheckoutItems }} items</p>
        <p>${{ checkoutTotalPrice }}</p>
        <p>
          <CheckoutButtonVue />
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import CartItem from "../components/CartItem/CartItem.vue";
import CheckoutButtonVue from "../components/CheckoutButton/CheckoutButton.vue";
import { computed } from "vue";

import { useStore } from "vuex";

const store = useStore();
const numCheckoutItems = computed(() => {
  return store.getters.getCheckout.reduce(
    (sum, item) => sum + parseInt(item.item.quantity),
    0
  );
});

const checkoutTotalPrice = computed(() => {
  return store.getters.getCheckout.reduce(
    (sum, item) => sum + parseInt(item.item.price) * item.item.quantity,
    0
  );
});

const cartItems = computed(() => store.getters.getCheckout);
</script>

<style>
.cartscreen {
  display: flex;
  max-width: 1300px;
  margin: 2rem auto;
}

.cartscreen h2 {
  margin-bottom: 1rem;
}

.cartscreen_left {
  flex: 0.7;
  margin-right: 1rem;
  background-color: transparent;
  padding: 1rem;
}

.cartscreen_right {
  flex: 0.3;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  height: fit-content;
}

.cartscreen_right div {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;
}

.cartscreen_right div:last-child {
  border: none;
}

.cartscreen_info p {
  padding: 8px;
}

.cartscreen_right div button {
  padding: 10px 17px;
  width: 100%;
  background: #171717;
  color: #f4f4f4;
  border: 1px solid #171717;
  cursor: pointer;
}

.cartscreen_right div button:hover {
  opacity: 0.9;
}

@media (max-width: 1320px) {
  .cartscreen {
    max-width: 900px;
  }
}

@media (max-width: 960px) {
  .cartscreen {
    max-width: 800px;
    flex-direction: column;
  }

  .cartscreen_left {
    margin: 0;
  }

  .cartscreen_right {
    margin: 1rem;
  }
}
</style>
