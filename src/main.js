import { createApp } from "vue";
import App from "./App.vue";
import store from "../store/store.js";
import createRouter from "./router/router";
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import {
  faCartShopping,
  faUserSecret,
  faTrashCan,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret, faCartShopping, faTrashCan, faBars);
// import "./assets/reset.css";

createApp(App)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(createRouter())
  .mount("#app");
