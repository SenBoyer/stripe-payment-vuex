<template>
  <div class="sidedrawer" :class="{ show: clicked }">
    <div class="sidedrawer_links">
      <li @click="toggleEvent"><router-link to="/">Home</router-link></li>
      <li @click="toggleEvent">
        <router-link to="/cart"
          ><font-awesome-icon icon="fa-solid fa-cart-shopping" />
          <span
            >Cart<span class="cartlogo_badge">{{
              numCheckoutItems
            }}</span></span
          ></router-link
        >
      </li>
    </div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const numCheckoutItems = computed(() => {
  return store.getters.getCheckout.reduce(
    (sum, item) => sum + parseInt(item.item.quantity),
    0
  );
});

const emit = defineEmits(["toggleDrawer"]);

const toggleEvent = () => {
  emit("toggleDrawer");
};

defineProps({
  clicked: Boolean,
});
</script>
<style scoped>
@import "./SideDrawer.css";
</style>
