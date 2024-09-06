<script setup lang="ts">
import { useConfig, useGlobal } from "@/stores";
import {
  computed,
  nextTick,
  onMounted,
  ref,
  watch,
  type ComputedRef,
  type Ref,
  type WritableComputedRef,
} from "vue";

import { useTheme } from "vuetify";

// Components

import LeftDrawer from "@/components/sidebar/LeftDrawer.vue";
import Navbar from "./components/header/Navbar.vue";

/** Vuetify Theme */
const theme = useTheme();

/** Global Store */
const globalStore = useGlobal();

/** Config Store */
const configStore = useConfig();

/** Title */
const title = import.meta.env.VITE_APP_TITLE ?? "Vuetify3 Application";

/** loading overlay visibility */
const loading: WritableComputedRef<boolean> = computed({
  get: () => globalStore.loading,
  set: (v) => globalStore.setLoading(v),
});

/** Appbar progressbar value */
const progress: ComputedRef<number | null> = computed(
  () => globalStore.progress
);

/** Snackbar visibility */
const snackbarVisibility: Ref<boolean> = ref(false);

/** Snackbar text */
const snackbarText: ComputedRef<string> = computed(() => globalStore.message);

/** Toggle Dark mode */
const isDark: ComputedRef<string> = computed(() =>
  configStore.isDarkTheme ? "myCustomDarkTheme" : "myCustomLightTheme"
);

// When snackbar text has been set, show snackbar.
watch(
  () => globalStore.message,
  (message) => (snackbarVisibility.value = message !== "")
);

/** Clear store when snackbar hide */
const onSnackbarChanged = async () => {
  globalStore.setMessage();
  await nextTick();
};
const appStyle = computed<string>(() => {
  const currentTheme = theme.global.current;
  const darkBackgroundColor = currentTheme.value.colors.background;
  const lightBackgroundColor = currentTheme.value.colors.background;
  console.log(currentTheme.value.colors.background);

  const style = currentTheme.value.dark
    ? `{background: ${darkBackgroundColor}}`
    : `{background: ${lightBackgroundColor}}`;
  console.log(style);

  return style;
});

onMounted(() => {
  document.title = title;

  // Set theme after 5 seconds
  setTimeout(() => {
    // configStore.setTheme(!configStore.theme);
  }, 5000);
});
</script>

<template>
  <v-app :theme="isDark">
    <v-theme-provider :theme="theme.global.name.value">
      <v-layout>
        <LeftDrawer />
        <Navbar :title="title" />

        <v-main>
          <router-view v-slot="{ Component, route }">
            <!--transition :name="route.meta.transition as string || 'fade'"-->
            <component :is="Component" :key="route.path" />
            <!--/transition-->
          </router-view>
        </v-main>
      </v-layout>

      <v-overlay
        v-model="loading"
        app
        class="justify-center align-center"
        persistent
      >
        <v-progress-circular indeterminate size="64" />
      </v-overlay>

      <v-snackbar
        v-model="snackbarVisibility"
        @update:model-value="onSnackbarChanged"
      >
        {{ snackbarText }}
        <template #actions>
          <v-btn icon="mdi-close" @click="onSnackbarChanged" />
        </template>
      </v-snackbar>

      <v-footer app elevation="3">
        <span class="mr-5">2024 &copy;</span>
      </v-footer>
    </v-theme-provider>
  </v-app>
  <teleport to="head">
    <meta
      name="theme-color"
      :content="theme.computedThemes.value[isDark].colors.primary"
    />
    <link rel="icon" :href="'logo'" type="image/svg+xml" />
  </teleport>
</template>

<style lang="scss"></style>
