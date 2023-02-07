<template>
  <nav class="navbar">
    <router-link to="/" class="link-home">
      <div class="navbar_logo">
        <h2>SENd money</h2>
        <img src="@/assets/monopoly-man.png" alt="logo" />
      </div>
    </router-link>
    <ul class="navbar_links">
      <li>
        <router-link to="/cart" class="cart_link">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
          <span
            >Cart<span class="cartlogo_badge">{{
              numCheckoutItems
            }}</span></span
          >
        </router-link>
      </li>
      <li>
        <router-link to="/">Shop</router-link>
      </li>
    </ul>
    <div class="hamburger_menu">
      <font-awesome-icon icon="fa-solid fa-bars" @click="toggleEvent" />
    </div>
  </nav>
</template>

<script setup>
import { computed, defineEmits } from "vue";
import { useStore } from "vuex";
// import DropdownVue from "../DropdownVue/DropdownVue.vue";

const store = useStore();

const emit = defineEmits(["toggleDrawer"]);

const toggleEvent = () => {
  emit("toggleDrawer");
};

const numCheckoutItems = computed(() => {
  return store.getters.getCheckout.reduce(
    (sum, item) => sum + parseInt(item.item.quantity),
    0
  );
});

// const numCheckoutItems2 = computed(() => {
//   let number = 0;
//   store.getters.getCheckout.map(
//     (total) => (number += parseInt(total.item.quantity))
//   );
//   return number;
// });
</script>

<style scoped>
@import "./NavBar.css";
</style>
