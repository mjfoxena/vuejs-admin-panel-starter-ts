import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { useTheme } from "vuetify";

/** Config Store */
export default defineStore(
  "config",
  () => {
    const defaultTheme = useTheme();

    /** Dark Theme mode */
    const isDarkTheme: Ref<boolean> = ref(
      // window.matchMedia("(prefers-color-scheme: dark)").matches
      defaultTheme.global.current.value.dark
    );

    const locale: Ref<string> = ref(
      window.navigator.languages[0] ?? window.navigator.language
    );

    /** Toggle Dark/Light mode */
    const toggleTheme = () => {
      isDarkTheme.value = !isDarkTheme.value;
      defaultTheme.global.name.value = isDarkTheme.value
        ? "myCustomDarkTheme"
        : "myCustomLightTheme";
    };
    /**
     * Set Locale.
     *
     * @param locale - Locale
     */
    const setLocale = (l: string) => (locale.value = l);

    return { isDarkTheme, toggleTheme, setLocale };
  },
  {}
);
