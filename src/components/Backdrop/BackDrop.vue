<template>
  <div
    class="backdrop"
    v-if="clicked"
    :class="{ show: clicked }"
    @click="toggleEvent"
  ></div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
// eslint-disable-next-line no-unused-vars
defineProps({
  clicked: Boolean,
});

const emit = defineEmits(["toggleDrawer"]);

const toggleEvent = () => {
  emit("toggleDrawer");
};
</script>
<style scoped>
.backdrop {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
