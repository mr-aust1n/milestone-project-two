// eslint.config.js
export default [
  {
    files: ["**/*.js"], // Lint all JavaScript files
    languageOptions: {
      ecmaVersion: "latest", // Support latest ES6+ syntax
      sourceType: "module", // Support ES modules
      globals: {
        window: "readonly",
        document: "readonly",
        fetch: "readonly",
        console: "readonly",
        alert: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "no-alert": "off",
      eqeqeq: "error",
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];
