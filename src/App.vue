<template>
  <NavBar :clicked="clicked" @toggleDrawer="toggleMenu()" />
  <BackDrop :clicked="clicked" @toggleDrawer="toggleMenu()" />
  <SideDrawer :clicked="clicked" @toggleDrawer="toggleMenu()" />
  <router-view></router-view>
</template>
<script>
import { ref } from "vue";
import NavBar from "./components/Navbar/NavBar.vue";
import BackDrop from "./components/Backdrop/BackDrop.vue";
import SideDrawer from "./components/Sidedrawer/SideDrawer.vue";
export default {
  name: "App",
  components: { NavBar, BackDrop, SideDrawer },

  setup() {
    const clicked = ref(false);

    const toggleMenu = () => {
      clicked.value = !clicked.value;
    };
    return { clicked, toggleMenu };
  },
};
</script>
<style>
@import "./index.css";
</style>
export default App;
