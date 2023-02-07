<template>
  <button
    @click="redirectToStripe"
    :disabled="isLoading"
    class="my-2 py-2 bg-emerald-500 min-w-full disabled:opacity-50 hover:bg-emerald-600 cursor-pointer"
  >
    <div v-if="isLoading" class="flex flex-row justify-center items-center">
      <span class="sr-only">Loading..</span>
      <div
        style="border-top-color: transparent"
        class="mx-auto w-8 h-8 border-4 border-slate-50 border-solid rounded-full animate-spin"
      />
    </div>
    <div v-else class="flex flex-row justify-center items-center text-sm">
      <div class="flex-row"></div>
      <span class="text-slate-50">Continue to</span>
      <img class="h-6" src="../../assets/stripewhite.png" alt="Stripe" />
    </div>
  </button>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

// eslint-disable-next-line no-unused-vars, no-undef
const props = defineProps({
  isLoading: Boolean,
});

const store = useStore();
const cartItems = computed(() => store.getters.getCheckout);

const redirectToStripe = async () => {
  const { url } = await fetch(
    "https://stripe-vue-backend.herokuapp.com/create-checkout-session",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems.value),
    }
  ).then((response) => response.json());

  window.location.href = url;
};
</script>
