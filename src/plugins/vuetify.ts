/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify, ThemeDefinition } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#F1F1F1",
    surface: "#FFFFFF",
    primary: "#E74563",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    drawer: "#FFFFFF",
    card: "#28243D",
  },
};

// My custom Dark Theme
const myCustomDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#121212",
    surface: "#333333",
    primary: "#E74563",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    drawer: "#333333",
    card: "#FFFFFF",
  },
};

export default createVuetify({
  theme: {
    // defaultTheme: "light",
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
      myCustomDarkTheme,
    },
  },
});
