// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "plugin:unicorn/recommended", "prettier"],
  ignorePatterns: ["/dist/*"],
  plugins: ["unused-imports"],
  rules: {
    "no-console": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    "arrow-body-style": ["error", "as-needed"],
    "no-constructor-return": "error",
    "no-duplicate-imports": "error",
    "no-self-compare": "error",
    "no-else-return": "error",
    "no-lonely-if": "error",
    "no-negated-condition": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "operator-assignment": ["error", "always"],
    "prefer-arrow-callback": "error",
  },
};
