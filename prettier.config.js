/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  jsxSingleQuote: false,
  singleQuote: true,
  trailingComma: 'none',
  tabWidth: 2
};

export default config;
