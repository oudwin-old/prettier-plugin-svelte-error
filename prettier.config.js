/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
module.exports = {
  semi: true,
  tabWidth: 2,
  plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
  //svelteStrictMode: true,
  overrides: [
    {
      files: "*.svelte",
      options: {
        parser: "svelte",
      },
    },
  ],
};
