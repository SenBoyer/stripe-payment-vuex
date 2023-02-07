<template>
  <div class="product">
    <img :src="item.image" alt="" />
    <div class="product_info">
      <p class="info_title">{{ item.name }}</p>
      <p v-class="info_description">
        {{ item.description }}
      </p>
      <p>${{ item.price }}.00</p>
      <!-- <router-link to="/product/${111}">Go to Home</router-link> -->
      <router-link :to="'/product/' + item._id" class="info_button"
        >View</router-link
      >
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps({
  item: Object,
});
</script>
<style>
@import "./ProductScreen.css";
</style>
