<template>
  <div class="homescreen">
    <h2 class="homescreen_title">Latest Products</h2>
    <div v-if="items" class="homescreen_products">
      <div v-for="item in items" :key="item.id">
        <ProductScreen :item="item" />
      </div>
    </div>
    <div class="about-section">
      <h1>About</h1>
      <div class="about-section-body">
        <img src="@/assets/splashimage.jpg" alt="about" />
        <p>
          At
          <span style="font-family: 'Playfair Display', serif">SENd Money</span
          >, we believe that everyone deserves to experience the beauty and
          value of non-existant precious metals. That's why we offer a wide
          range of silver, gold, and bronze packages that don't exist, each
          carefully crafted to meet the unique needs of our bank account.
          Whether you're looking for a special gift, a bad investment
          opportunity, or simply a way to add a touch of elegance to wasting
          money in your life, we have you covered. So why wait? Browse our
          collection today and find the perfect package for you!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductScreen from "../ProductScreen/ProductScreen.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const getProducts = async () => {
  await store.dispatch("getAllProducts");
  await store.dispatch("initCheckout");
};
getProducts();

const items = computed(() => store.getters.getProducts);
</script>

<style scoped>
@import "./HomeScreen.css";
</style>
