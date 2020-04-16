module.exports = {
  presets: ["babel-preset-gatsby"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          components: "./src/components",
          views: "./src/views",
          context: "./src/context",
          utils: "./src/utils",

          config: "./config",
        },
      },
    ],
    [
      "import",
      {
        libraryName: "react-bootstrap",
        libraryDirectory: "",
        camel2DashComponentName: false,
      },
      "tree-shaking-react-bootstrap",
    ],
  ],
  env: {
    production: {
      plugins: ["transform-react-remove-prop-types"],
    },
  },
};
