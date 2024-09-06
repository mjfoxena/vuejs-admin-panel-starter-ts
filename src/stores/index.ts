import { createPinia, type Pinia } from "pinia";

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// Pinia Stores
import useConfig from "@/stores/modules/config/config.store";
import useGlobal from "@/stores/modules/root/global.store";

/** Pinia Store */
const pinia: Pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;

export { useConfig, useGlobal };
