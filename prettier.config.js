// Source: https://github.com/withastro/astro

/** @type {import('prettier').Config} */
export default {
  printWidth: 150,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: ['.*', '*.toml', '*.yml'],
      options: {
        useTabs: false,
      },
    },
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: '*.md',
      options: {
        requirePragma: true,
      },
    },
  ],
};
