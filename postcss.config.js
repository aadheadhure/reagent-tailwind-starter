var config = {
  plugins: [
    require("autoprefixer"),
    require("tailwindcss")("./tailwind.config.js"),
  ],
};

if (process.env.NODE_ENV === "production") {
  config.plugins.push(require("cssnano"));
}

module.exports = config;
