// Plugins
import { registerPlugins } from "@/plugins";
// Load vue core
import store from "@/stores";
import { createApp } from "vue";

import App from "@/App.vue";
import vuetify from "@/plugins/vuetify";
import router from "@/router";
import "@/styles/global.scss";

/** Register Vue */
const vue = createApp(App);
vue.use(router);
vue.use(store);
vue.use(vuetify);
registerPlugins(vue);
// Run!
router
  .isReady()
  .then(() => vue.mount("#app"))
  .catch((e: any) => console.error(e));
