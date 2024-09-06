/**
 * .eslint.js
 *
 * ESLint configuration file.
 */

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    "vuetify",
    "@vue/eslint-config-typescript/recommended",
    "plugin:vue/vue3-recommended", // Recommended rules for Vue.js 3
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "./.eslintrc-auto-import.json",
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/script-indent": [
      "error",
      2,
      {
        baseIndent: 0,
        switchCase: 0,
        ignores: [],
      },
    ],
    "vue/html-indent": ["error", 2], // Enforce consistent indentation in <template>
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ], // Limit the number of attributes per line
    "vue/singleline-html-element-content-newline": "error", // Enforce newlines for content in single-line elements
    "vue/multiline-html-element-content-newline": "error", // Enforce newlines for content in multi-line elements
    "vue/attribute-hyphenation": ["error", "always"], // Enforce hyphenated attribute names
    "vue/no-multiple-template-root": "off", // Disable the rule for multiple root nodes in <template>
    "vue/require-default-prop": "error", // Enforce default values for props
    "vue/require-prop-types": "error", // Enforce prop types
    "@typescript-eslint/explicit-module-boundary-types": "off", // Disable the need for explicit return types on functions
    "@typescript-eslint/no-explicit-any": "warn", // Warn when `any` is used
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off", // Warn about console statements in production
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off", // Warn about debugger statements in production
  },
};
