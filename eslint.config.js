import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  {
    ignores: ["dist/", ".claude/", "playwright-report/", "test-results/"],
  },
  js.configs.recommended,
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      // Plain JavaScript project with no prop-types package.
      "react/prop-types": "off",
      // Apostrophes and quotes in JSX copy render correctly as typed.
      "react/no-unescaped-entities": "off",
    },
  },
  {
    files: ["*.config.js", "tests/**/*.js"],
    languageOptions: {
      globals: globals.node,
    },
  },
];
