<script setup lang="ts">
interface INavabrProps {
  title?: string;
}
import { useConfig, useGlobal } from "@/stores";
const { title } = defineProps<INavabrProps>();

const globalStore = useGlobal();
const configStore = useConfig();
</script>

<template>
  <v-app-bar :order="globalStore.layout.order" elevation="0">
    <v-app-bar-nav-icon @click="globalStore.toggleRail">
      <v-icon>mdi-text</v-icon>
    </v-app-bar-nav-icon>
    <v-app-bar-title tag="h1">{{ title }}</v-app-bar-title>
    <v-spacer />

    <v-btn
      icon
      slim
      @click="configStore.toggleTheme"
      color="primary"
      variant="tonal"
      size="small"
      class="mr-5"
    >
      <v-icon>{{
        configStore.isDarkTheme ? "mdi-weather-sunny" : "mdi-weather-night"
      }}</v-icon>
    </v-btn>
    <app-bar-menu-component />
    <user-menu />
    <v-progress-linear
      v-show="globalStore.loading"
      :active="globalStore.loading"
      :indeterminate="globalStore.progress === null"
      :model-value="globalStore.progress !== null ? globalStore.progress : 0"
      color="blue-accent-3"
    />
  </v-app-bar>
</template>
