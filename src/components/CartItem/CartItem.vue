<template>
  <div class="cartitem">
    <div>{{ item.item.name }}</div>
    <div class="cartitem_image">
      <img :src="item.item.image" alt="product" />
    </div>
    <Link to="/product/:id"
      ><p>{{ item.item.name }}</p>
    </Link>
    <p class="cartitem_price">${{ item.item.price }}</p>
    <select
      v-model="quantity"
      @change="quantityUpdate(item, quantity)"
      class="cartitem_select"
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>

    <button class="cartitem_deleteBtn" @click="removeItem(item.item._id)">
      <font-awesome-icon icon="fa-solid fa-trash-can" />
    </button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref } from "vue";
const store = useStore();

// eslint-disable-next-line no-undef
const props = defineProps({
  item: Object,
});

let quantity = ref(props.item.item.quantity);

const removeItem = (item) => {
  store.dispatch("removeProduct", item);
};

const quantityUpdate = (item, quantity) => {
  store.dispatch("changeCartQuantity", {
    item: item.item.name,
    quantity: quantity,
  });
};
</script>
<style>
@import "./CartItem.css";
</style>
