<template>
  <div class="productscreen">
    <div class="productscreen_left">
      <div class="left_image">
        <img :src="item.image" alt="" />
      </div>
      <div class="left_info">
        <p class="left_name">{{ item.name }}</p>
        <p>Price: ${{ item.price }}</p>
        <p>Description: {{ item.description }}</p>
      </div>
      <div class="productscreen_right">
        <div class="right_info">
          <p>
            Price: <span>${{ item.price }}</span>
          </p>
          <p>Status: <span>In Stock</span></p>
          <p>
            Qty
            <select v-model="quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </p>
          <p>
            <button type="button" @click="addToCart(quantity)">
              Add to Cart
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();
let quantity = ref(1);
const addToCart = () => {
  store.dispatch("cartAdd", { item: item.value, quantity: quantity.value });
};

const getItemFromDB = async () => {
  await store.dispatch("idLookup", route.params.id);
};
getItemFromDB();

const item = computed(() => store.getters.getSelectedProduct);
</script>
<style>
.productscreen {
  display: flex;
  max-width: 1300px;
  margin: 1rem auto;
}

.productscreen_left {
  display: flex;
  flex: 0.8;
}

.left_image {
  margin: 1rem;
  flex: 0.6;
}

.left_image > img {
  max-height: 350px;
}

.left_info {
  margin: 1rem;
  flex: 0.4;
  background: white;
  height: fit-content;
  font-size: 0.9rem;
}

.left_name {
  font-size: 1.3rem;
  font-weight: 600;
}

.left_info > p,
.right_info > p {
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.left_info > p:last-child,
.right_info > p:last-child {
  border: none;
}

.productscreen_right {
  flex: 0.2;
}

.right_info {
  width: 250px;
  margin: 1rem;
  background: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
}

.right_info p {
  padding: 1rem;
  font-size: 0.8rem;
  display: grid;
  grid-template-columns: repeat)2, 1fr);
}

.right_info p > button {
  grid-column: 1/-1;
  padding: 10px 16px;
  background: #171717;
  color: #f4f4f4;
  border: 1px solid #171717;
  cursor: pointer;
}

.right_info p > button:hover {
  background: #d7d7d7;
  color: black;
}

.right_info select {
  padding: 10px 16px;
}

@media (max-width: 960px) {
  .productscreen {
    flex-direction: column;
    flex: 1;
  }

  .productscreen_left {
    flex-direction: column;
    flex: 1;
  }

  .left_image {
    flex: 1;
  }

  .left_info {
    flex: 1;
  }

  .productscreen_right {
    flex: 1;
  }

  .right_info {
    width: 100%;
    margin: 0;
  }

  .right_info p > button:hover {
    background: #d7d7d7;
    color: black;
  }
}
</style>
