// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "plugin:unicorn/recommended", "prettier"],
  ignorePatterns: ["/dist/*"],
  plugins: ["unused-imports"],
  rules: {
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
  },
};
