const config = {
  plugins: ["@tailwindcss/postcss"],
  'postcss-preset-env': {
      stage: 3,
      features: {
        'color-oklch': true,
      },
    },
};

export default config;
